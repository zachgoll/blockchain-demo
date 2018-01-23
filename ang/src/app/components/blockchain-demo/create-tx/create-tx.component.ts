import { CanComponentDeactivate } from './../../../services/can-deactivate-service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-create-tx',
  templateUrl: './create-tx.component.html',
  styleUrls: ['./create-tx.component.css']
})
export class CreateTxComponent implements OnInit, CanComponentDeactivate {

  changes = true;

  constructor() { }

  utxos = [
    {value: 22.3, user_id: 1},
    {value: 21.3, user_id: 2},
    {value: 25.3, user_id: 3},
  ];

  txUtxos = [];

  selectedUtxos: {value: number, user_id: number}[] = [];

  draggedUtxo: any;

  usersWithPics = [
    {'f_name': 'Zach', 
    'l_name': 'Gollwitzer', 
    'name': 'Zach', 
    'picture': 'http://gozips.com/images/2017/5/17/31x6rygaeo4it3vj.jpg?width=300'}
  ];

  public model: any;

  ngOnInit() {
    this.selectedUtxos = [];
  }

/**
 * ===========================
 * Drag and Drop functionality
 * ===========================
 */

  dragStart(event, utxo) {
    this.draggedUtxo = utxo;
  }

  drop(event) {
      if (this.draggedUtxo) {
          const draggedUtxoIndex = this.findIndex(this.draggedUtxo);
          this.selectedUtxos = [...this.selectedUtxos, this.draggedUtxo];
          this.utxos = this.utxos.filter((val, i) => i !== draggedUtxoIndex);
          this.draggedUtxo = null;
      }
  }

  dragEnd(event) {
      this.draggedUtxo = null;
  }

  findIndex(utxo) {
      let index = -1;
      for (let i = 0; i < this.utxos.length; i++) {
          if (utxo.user_id === this.utxos[i].user_id) {
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
        if (utxo.user_id === this.selectedUtxos[i].user_id) {
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
      : this.usersWithPics.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
  
  formatter = (x: {name: string}) => x.name;
  
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.changes){
      return true;
    } else {
      return confirm('Are you sure you want to navigate away?  All changes will be lost!');
    }
  }

}
