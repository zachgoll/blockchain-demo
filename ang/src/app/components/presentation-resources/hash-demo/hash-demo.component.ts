import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    //this.hashedData = this.hashForm.value.rawdata;
    this.hashedData = '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B';
  }

}
