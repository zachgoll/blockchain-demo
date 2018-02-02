import { QueryService } from './../../../services/query.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wallet-generator',
  templateUrl: './wallet-generator.component.html',
  styleUrls: ['./wallet-generator.component.css']
})
export class WalletGeneratorComponent implements OnInit {

  @ViewChild('ether') etherForm: NgForm;

  constructor(private query: QueryService) { }

  user: any;
  keypair: {priv_key: string, pub_key: string};
  generating: boolean;
  demoAccount: string = '0xEA1380bcFd38A69E820C47e7DC45740d1025f63F';
  privShow = false;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getKeypair();
  }

  getEther() {
    console.log('got ether');
  }

  genKeypair() {
    this.generating = true;
    this.query.generateKeypair().subscribe(() => {
      this.query.getKeypair(this.user.id).subscribe((keypair) => {
        if (keypair) {
          this.keypair = {
            priv_key: keypair.priv_key,
            pub_key: keypair.pub_key
          };
          this.generating = false;
        }
      });
    });
  }

  getKeypair() {
    this.query.getKeypair(this.user.id).subscribe((keypair) => {
      if (keypair) {
        this.keypair = {
          priv_key: keypair.priv_key,
          pub_key: keypair.pub_key
        };
      }
    });
  }
}
