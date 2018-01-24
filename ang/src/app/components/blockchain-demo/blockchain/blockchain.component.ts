import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  constructor(private authService: AuthService) { }

  coinbaseAdded = false;

  blocks = [{
    blockHeight: 0,
    prevBlockHash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    merkleRoot: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13d',
    timestamp: 'Monday January 28 2018 18:00:09',
    nonce: 0,
    numberTxsInBlock: 3,
    blockHash: '0xF0E4C2FaaC58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    txs: [{
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
    }]
  },
  {
    blockHeight: 1,
    prevBlockHash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    merkleRoot: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13d',
    timestamp: 'Monday January 28 2018 18:00:09',
    nonce: 0,
    numberTxsInBlock: 3,
    blockHash: '0xF0E4C2FaaC58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    txs: [{
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
    }]
  },
  {
    blockHeight: 2,
    prevBlockHash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    merkleRoot: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13d',
    timestamp: 'Monday January 28 2018 18:00:09',
    nonce: 0,
    numberTxsInBlock: 3,
    blockHash: '0xF0E4C2FaaC58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    txs: [{
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
    }]
  }];

  coinbase = {
    hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2],
    coinbase: true
  };

  ngOnInit() {
  }

}
