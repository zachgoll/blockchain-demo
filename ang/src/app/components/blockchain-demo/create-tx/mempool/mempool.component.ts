import { Component, OnInit } from '@angular/core';
import { Tx } from '../tx.model';

@Component({
  selector: 'app-mempool',
  templateUrl: './mempool.component.html',
  styleUrls: ['./mempool.component.css']
})
export class MempoolComponent implements OnInit {

  items = [{
    txhash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2]
  },
  {
    txhash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2]
  },
  {
    txhash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2]
  }];

  constructor() { }

  ngOnInit() {
  }

}
