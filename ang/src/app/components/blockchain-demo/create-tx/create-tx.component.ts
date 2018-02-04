import { AuthService } from './../../../services/auth.service';
import { CanComponentDeactivate } from './../../../services/can-deactivate-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { QueryService } from '../../../services/query.service';
import { Utxo } from '../utxo.model';
import { Tx } from '../tx.model';
import { NgForm } from '@angular/forms';
import { TxSubmit } from '../tx-submit.model';

declare var Web3: any;

const web3 = new Web3();

@Component({
  selector: 'app-create-tx',
  templateUrl: './create-tx.component.html',
  styleUrls: ['./create-tx.component.css']
})
export class CreateTxComponent implements OnInit, CanComponentDeactivate {

  constructor(private authService: AuthService, private query: QueryService) { }

  changes = true;

  @ViewChild('txform') txForm: NgForm;

  utxo: Utxo;
  draggedUtxo: Utxo;
  utxos: Utxo[] = [];
  txUtxos: Utxo[] = [];
  selectedUtxos: Utxo[] = [];
  totalUtxo: number = 0;
  user: any;
  usersWithPics: {username: string, id: number, picture_url: string}[] = [];

  public model: any;
  invalidUtxo: boolean;
  invalidTx: boolean;
  notEnoughFunds: boolean;
  invalidForm: boolean;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.selectedUtxos = [];
    this.updateUtxos();
    this.loadUsers();
  }

  loadUsers() {
    this.authService.loadUserProfiles().subscribe((users) => {
      this.usersWithPics = users;
    });
  }

  onTxSubmit() {

    console.log(this.txForm.valid);
    if (!this.txForm.valid) {
      this.invalidForm = true;
      setTimeout(() => {
        this.invalidForm = false;
      }, 6000);
    } else {
      if (this.txForm.value.selectedUser.id === this.user.id) {
        this.invalidTx = true;
        setTimeout(() => {
          this.invalidTx = false;
        }, 5000);
      } else {
        const sendAmount = +this.txForm.value.amount;
        const currentUserId = this.user.id;
        const fee = +this.txForm.value.fee;
        let totalInputs = 0;

        for (let i = 0; i < this.selectedUtxos.length; i++) {
          totalInputs = totalInputs + this.selectedUtxos[i].value;
        }

        if (totalInputs < fee + sendAmount) {
          this.notEnoughFunds = true;
          setTimeout(() => {
            this.notEnoughFunds = false;
          }, 6000);
        } else {
          const txToSubmit: TxSubmit = {
            from: currentUserId,
            tx: {
              tx_hash: '',
              fee: fee,
              coinbase: false
            },
            inputs: this.selectedUtxos,
            outputs: [{
              value: sendAmount,
              to: this.txForm.value.selectedUser.id
            },
            {
              value: totalInputs - (sendAmount + fee),
              to: currentUserId
            }]
          };

          console.log(txToSubmit);
          this.query.postTx(txToSubmit).subscribe((tx) => {
            // Reload UTXOs, reset form, reset selected UTXOs
            this.updateUtxos();
            this.txForm.reset();
            this.selectedUtxos = [];
          }, (err) => {
            console.log(err);
          });
        }
      }
    }
  }

  /**
   * Fee is estimated based on the number of UTXO inputs
   */
  estimateFee() {
    let fee = 0;
    this.selectedUtxos.forEach(() => fee += 0.2 );
    this.txForm.form.patchValue({
      fee: fee
    });
  }

  onTxSub(eventData: Event) {
    if (this.selectedUtxos.length === 0){
      this.updateUtxos();
    }
  }

  countUtxos() {
    let counter = 0;
    this.utxos.forEach((utxo) => {
      if (utxo.current_owner === this.user.id) {
        counter += utxo.value;
      }
    });
    this.totalUtxo = counter;
  }

  updateUtxos() {
    this.query.getUtxos(this.user.id).subscribe((utxos) => {
      this.utxos = utxos.sort((a, b) => {
        if (a.current_owner === this.user.id) {
          return -1;
        } else {
          return 1;
        }
      });
      this.countUtxos();
    });
  }

/**
 * ===========================
 * Drag and Drop functionality
 * ===========================
 */

  dragStart(event, utxo) {
    this.invalidUtxo = false;
    this.draggedUtxo = utxo;
  }

  drop(event) {
      if (this.draggedUtxo) {
          const draggedUtxoIndex = this.findIndex(this.draggedUtxo);
          if (this.draggedUtxo.current_owner !== this.user.id) {
            this.invalidUtxo = true;
            setTimeout(() => {
              this.invalidUtxo = false;
            }, 6000);
          } else {
            this.selectedUtxos = [...this.selectedUtxos, this.draggedUtxo];
            this.utxos = this.utxos.filter((val, i) => i !== draggedUtxoIndex);
          }
          this.draggedUtxo = null;
      }
  }

  dragEnd(event) {
      this.draggedUtxo = null;
  }

  findIndex(utxo) {
      let index = -1;
      for (let i = 0; i < this.utxos.length; i++) {
          if (utxo.id === this.utxos[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }

  dropSel(event) {
      if (this.draggedUtxo) {
          const draggedUtxoIndex = this.findIndexSel(this.draggedUtxo);
          this.utxos = [...this.utxos, this.draggedUtxo];
          this.selectedUtxos = this.selectedUtxos.filter((val, i) => i !== draggedUtxoIndex);
          this.draggedUtxo = null;
      }
  }

  findIndexSel(utxo) {
    let index = -1;
    for (let i = 0; i < this.selectedUtxos.length; i++) {
        if (utxo.id === this.selectedUtxos[i].id) {
            index = i;
            break;
        }
    }
    return index;
  }

  /**
   * ===========================
   * Autocomplete functionality
   * ===========================
   */

  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .map(term => term === '' ? []
      : this.usersWithPics.filter(v => v.username.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  formatter = (x: {username: string}) => x.username;

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.selectedUtxos.length === 0) {
      return true;
    } else {
      return confirm('Are you sure you want to navigate away?  All changes will be lost!');
    }
  }

}
