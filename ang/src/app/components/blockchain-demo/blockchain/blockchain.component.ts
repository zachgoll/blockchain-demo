import { User } from './../../user/user.model';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { StringifyOptions } from 'querystring';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  constructor(private authService: AuthService, private query: QueryService) {
   }

  coinbaseAdded = false;

  user: any;
  loading = true;

  blocks = [];

  coinbase = {
    hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B',
    inputs: [20.1, 40.1],
    outputs: [32.1, 43.2],
    coinbase: true
  };

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loadBlocks();
  }

  loadBlocks() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
    this.query.getUserBlockchain(this.user.id).subscribe((blocks) => {
      blocks.forEach((block) => {
        let b = {
          minedByName: '',
          minedByPicture: '',
          blockHeight: block.height,
          prevBlockHash: block.previous_block,
          merkleRoot: block.merkle_root,
          timestamp: block.timestamp,
          nonce: block.nonce,
          numberTxsInBlock: block.num_txs,
          blockHash: block.block_hash,
          txs: []
        };
        this.query.getBlockTxs(block.id).subscribe((block_txs) => {
          this.query.getOutputs(block_txs[0].id).subscribe((coinbase_outputs) => {
            const minedBy = coinbase_outputs[0].current_owner;
            this.query.getUserById2(minedBy).subscribe((user: User) => {
              b.minedByName = user.f_name + ' ' + user.l_name;
              b.minedByPicture = user.picture_url;
            });
          });
          block_txs.forEach((t) => {
            let tx_temp = {
              tx_hash: t.tx_hash,
              coinbase: t.coinbase,
              inputs: [],
              outputs: []
            };
            this.query.getInputs(t.id).subscribe((inputs) => {
              inputs.forEach((input) => tx_temp.inputs.push(input));
              this.query.getOutputs(t.id).subscribe((outputs) => {
                outputs.forEach((output) => {tx_temp.outputs.push(output);});
                b.txs.push(tx_temp);
              });
            });
          });
        });
        this.blocks.push(b);
      });
    });
  }

}
