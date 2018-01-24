import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

declare var Web3: any;

const web3 = new Web3();

@Component({
  selector: 'app-pow-demo',
  templateUrl: './pow-demo.component.html',
  styleUrls: ['./pow-demo.component.css']
})
export class PowDemoComponent implements OnInit {

  constructor() { }

  @ViewChild('powForm') powForm: NgForm;

  nonce: number;
  mining = false;
  finished = false;
  processing = false;
  solution: string;

  difficulty: string[] = [
    '0x0fffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
    '0x00ffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
    '0x000fffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3'
  ];

  ngOnInit() {
    this.nonce = 0;
  }

  mine() {
    const data = this.powForm.value.rawdata;
    const difficulty = 0;

    this.reset(data, difficulty);
    this.increment(data, difficulty);
  }

  reset(data, difficulty) {
    this.finished = false;
    this.solution = '';
    this.nonce = 0;
  }

  increment(data, difficulty): void {
    setTimeout(() => {
      if (web3.sha3(this.nonce + data) >= this.difficulty[difficulty]) {
        this.mining = true;
        this.nonce = this.nonce + 1;
        this.solution = web3.sha3(this.nonce + data);
        this.increment(data, difficulty);
      } else {
        this.mining = false;
        this.solution = web3.sha3(this.nonce + data);
        this.finished = true;
      }
    }, 200);
  }

}
