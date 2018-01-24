import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-create-block',
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.css']
})
export class CreateBlockComponent implements OnInit {

  constructor() { }

  coinbaseAdded = false;

  blockHeight: number = 0;
  prevBlockHash: string = '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B';
  merkleRoot: string = '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13d';
  timestamp: string = 'Monday January 28 2018 18:00:09';
  nonce: number = 0;
  numberTxsInBlock: number = 3;
  blockHash: string = '0xF0E4C2FaaC58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B';

  coinbase: {hash: string, inputs: number[], outputs: number[], coinbase: boolean};

  items = [{
    hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2],
    coinbase: false
  },
  {
    hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2],
    coinbase: false
  },
  {
    hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2],
    coinbase: false
  }];


  txUtxos = [];

  selectedTxs: {hash: string, inputs: number[], outputs: number[], coinbase: boolean}[] = [];

  draggedTx: any;

  public model: any;

  ngOnInit() {
    this.selectedTxs = [];
  }

/**
 * ===========================
 * Coinbase Transaction
 * ===========================
 */

createCoinbase() {
  this.coinbase = {
    hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [],
    outputs: [32.1, 43.2],
    coinbase: true
  };

  this.coinbaseAdded = true;
}


/**
 * ===========================
 * Drag and Drop functionality
 * ===========================
 */

  dragStart(event, tx) {
    this.draggedTx = tx;
    console.log(this.items.length);
  }

  drop(event) {
      if (this.draggedTx) {
          const draggedTxIndex = this.findIndex(this.draggedTx);
          this.selectedTxs = [...this.selectedTxs, this.draggedTx];
          this.items = this.items.filter((val, i) => i !== draggedTxIndex);
          this.draggedTx = null;
      }
  }

  dragEnd(event) {
      this.draggedTx = null;
  }

  findIndex(tx) {
      let index = -1;
      for (let i = 0; i < this.items.length; i++) {
          if (tx.hash === this.items[i].hash) {
              index = i;
              break;
          }
      }
      return index;
  }

  dropSel(event) {
      if (this.draggedTx) {
          const draggedTxIndex = this.findIndexSel(this.draggedTx);
          this.items = [...this.items, this.draggedTx];
          this.selectedTxs = this.selectedTxs.filter((val, i) => i !== draggedTxIndex);
          this.draggedTx = null;
      }
  }

  findIndexSel(tx) {
    let index = -1;
    for (let i = 0; i < this.selectedTxs.length; i++) {
        if (tx.hash === this.selectedTxs[i].hash) {
            index = i;
            break;
        }
    }
    return index;
  }

}
