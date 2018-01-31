import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tx } from '../../tx.model';
import { UtxoRaw } from '../../utxo-raw.model';
import { QueryService } from '../../../../services/query.service';


@Component({
  selector: 'app-mempool',
  templateUrl: './mempool.component.html',
  styleUrls: ['./mempool.component.css']
})
export class MempoolComponent implements OnInit {

  constructor(private authService: AuthService, private query: QueryService) { }

  @Output() txSubscribed = new EventEmitter();

  user: any;

  txs: Tx[] = [];

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loadTxs();
    setInterval(() => {
      this.loadTxs();
    }, 5000);
  }

  loadTxs() {
    this.query.getIncomingTxs(this.user.id).subscribe((data) => {
      data.forEach((element) => {
        if (this.txs.findIndex(el => el.id === element.id) === -1) {
          this.query.getInputs(element.id).subscribe((inputs) => {
            element.inputs = inputs;
            this.query.getOutputs(element.id).subscribe((outputs) => {
              element.outputs = outputs;
              this.txs.push(element);
            });
          });
        }
      });
      this.txSubscribed.emit();
    });
  }

  accept(index: number) {
    const inputs = this.txs[index].inputs;
    const outputs = this.txs[index].outputs;

    // Add all tx inputs to spent utxos
    inputs.forEach((input) => {
      console.log('input spent');
      this.query.spendUtxo(input.id).subscribe();
    });

    // Add all tx outputs to unspent utxos
    outputs.forEach((output) => {
      console.log('output subbed');
      this.query.subscribeUtxo(output.id).subscribe();
    });

    // Add tx to user subscriptions
    this.query.subscribeTx(this.txs[index].id).subscribe(() => {
      this.loadTxs();
    });

  }

  reject(index: number) {

    // Add tx to user subscriptions
    this.query.rejectTx(this.txs[index].id).subscribe(() => {
      this.loadTxs();
    });
  }

}
