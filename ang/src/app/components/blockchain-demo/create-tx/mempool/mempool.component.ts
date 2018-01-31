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
  }

  loadTxs() {
    this.txs = [];
    this.query.getIncomingTxs(this.user.id).subscribe((data) => {
      data.forEach((element) => {
        this.query.getInputs(element.id).subscribe((inputs) => {
          element.inputs = inputs;
          this.query.getOutputs(element.id).subscribe((outputs) => {
            element.outputs = outputs;
            this.txs.push(element);
          });
        });
      });
    });
  }

  accept(index: number) {
    const inputs = this.txs[index].inputs;
    const outputs = this.txs[index].outputs;

    console.log(inputs);
    console.log(outputs);

    // Add all tx inputs to spent utxos
    inputs.forEach((input) => {
      this.query.spendUtxo(input.id).subscribe();
    });

    // Add all tx outputs to unspent utxos
    outputs.forEach((output) => {
      this.query.subscribeUtxo(output.id).subscribe();
    });

    console.log(this.txs[index].id);
    // Add tx to user subscriptions
    this.query.subscribeTx(this.txs[index].id).subscribe(() => {
      this.loadTxs();
    });

    // Emit an event that can be sent to create-tx component
    this.txSubscribed.emit();

  }

  reject(index: number) {

    // Add tx to user subscriptions
    this.query.rejectTx(this.txs[index].id).subscribe(() => {
      this.loadTxs();
    });

    // Emit an event that can be sent to create-tx component
    this.txSubscribed.emit();
  }

}
