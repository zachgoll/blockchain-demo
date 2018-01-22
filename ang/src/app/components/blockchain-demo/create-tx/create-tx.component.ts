import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from './../../../services/can-deactivate-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-tx',
  templateUrl: './create-tx.component.html',
  styleUrls: ['./create-tx.component.css']
})
export class CreateTxComponent implements OnInit, CanComponentDeactivate {

  changes = true;

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.changes){
      return true;
    } else {
      return confirm('Are you sure you want to navigate away?  All changes will be lost!');
    }
  }

}
