import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var Web3: any;

const web3 = new Web3();

@Component({
  selector: 'app-hash-demo',
  templateUrl: './hash-demo.component.html',
  styleUrls: ['./hash-demo.component.css']
})
export class HashDemoComponent implements OnInit {

  @ViewChild('hashform') hashForm: NgForm;

  hashedData: string;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.hashedData = web3.sha3(this.hashForm.value.rawdata);
  }

}
