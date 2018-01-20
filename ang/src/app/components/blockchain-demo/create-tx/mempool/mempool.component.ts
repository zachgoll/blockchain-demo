import { Component, OnInit } from '@angular/core';
import { Tx } from '../tx.model';

@Component({
  selector: 'app-mempool',
  templateUrl: './mempool.component.html',
  styleUrls: ['./mempool.component.css']
})
export class MempoolComponent implements OnInit {

  mempool: Tx[] = [
    new Tx(1, 0.4, '0xkjsdf')
  ];

  constructor() { }

  ngOnInit() {
  }

}
