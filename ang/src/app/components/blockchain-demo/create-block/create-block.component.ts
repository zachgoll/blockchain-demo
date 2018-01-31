import { TxSubmit } from './../tx-submit.model';
import { Tx } from './../tx.model';
import { User } from './../../user/user.model';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { QueryService } from '../../../services/query.service';

declare var Web3: any;

const web3 = new Web3();

@Component({
  selector: 'app-create-block',
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.css']
})
export class CreateBlockComponent implements OnInit {

  constructor(private authService: AuthService, private query: QueryService) { }

  @ViewChild('mem') mem;

  // General Variables
  user: any;

  // Drag n Drop variables
  coinbaseAdded = false;
  txUtxos = [];
  selectedTxs: Tx[] = [];
  txs: Tx[] = [];
  draggedTx: Tx;
  public model: any;

  // Block variables
  blockReward = 50;
  blockHeight: number = 1;
  prevBlockHash: string = 'loading...';
  merkleRoot: string = 'No transactions in block yet';
  timestamp: string = 'Set when block is mined';
  nonce: number = 0;
  numberTxsInBlock: number = 0;
  blockHash: string = 'Set when block is mined';
  merkleHighlight = false;
  broadcastAlert = false;

  // Mining Variables
  mining = false;
  finished = false;
  processing = false;
  coinbaseAlert = false;
  blocksLeft = true;
  blockAlert = false;
  difficultyTarget = 1;
  blockLoser = false;

  // Mining difficulty
  difficulty: string[] = [
    '0x0fffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
    '0x00ffffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3',
    '0x000fffff62236eb17adc8502332f4c9c82bc14e19bfc0aa10ab674ff75b3d2f3'
  ];

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  coinbase: {tx_hash: string, outputs: {value: number, to: number}[], coinbase: boolean};

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.selectedTxs = [];
    this.getUserBlockchain();
    this.loadTxs();
  }

  noMoreBlocks() {
    console.log('got an alert that there are no more blocks');
    this.blockAlert = false;
    this.blocksLeft = false;
  }

  loadTxs() {
    this.txs = [];
    this.query.getUserTxs(this.user.id).subscribe((data) => {
      data.forEach((element) => {
        this.query.getInputs(element.id).subscribe((inputs) => {
          element.inputs = inputs;
          this.query.getOutputs(element.id).subscribe((outputs) => {
            element.outputs = outputs;
            this.txs.push(element);
          });
        });
      });
    });
  }

  getUserBlockchain() {
    this.query.getUserBlockchain(this.user.id).subscribe((blocks) => {
      this.blockHeight = blocks.length;
      if (blocks.length !== 0) {
        this.prevBlockHash = blocks[blocks.length - 1].block_hash;
      } else {
        this.prevBlockHash = '0x0000000000000000000000000000000000000000000000000000000000000000';
      }
    });
  }

  onBlockSub() {
    this.loadTxs();
    this.blockHeight++;
    this.resetBlock();
    this.getUserBlockchain();
  }

  /**
 * ===========================
 * Block Functionality
 * ===========================
 */

 resetBlock() {
   this.selectedTxs = [];
   this.coinbase = null;
   this.timestamp = 'Set when block is mined';
   this.nonce = 0;
   this.finished = false;
   this.merkleRoot = 'No transactions in block yet';
   this.prevBlockHash = '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B';
   this.blockHash = 'Set when block is mined';
   this.coinbaseAdded = false;
   this.coinbaseAlert = false;
 }

 broadcast() {
  const block = {
    height: this.blockHeight,
    block_hash: this.blockHash,
    previous_block: this.prevBlockHash,
    merkle_root: this.merkleRoot,
    timestamp: this.timestamp,
    nonce: this.nonce,
    num_txs: this.numberTxsInBlock
  };

  // Check to make sure that current user won the mining race
  this.query.getIncomingBlocks(this.user.id).subscribe((blocks) => {
    if (blocks.length === 0) {
      this.query.postBlock(block).subscribe((blk) => {
        this.broadcastAlert = true;
        setTimeout(() => {
          this.broadcastAlert = false;
        }, 8000);

        const coinbaseToSubmit: TxSubmit = {
          from: this.user.id,
          tx: {
            tx_hash: '',
            fee: 0,
            coinbase: true
          },
          inputs: [],
          outputs: this.coinbase.outputs
        };

        this.selectedTxs.forEach((tx) => {
          this.query.unsubscribeTx(tx.id).subscribe();
          this.query.addTxToBlock(tx.id, blk.id).subscribe();
        });

        this.query.postTx(coinbaseToSubmit).subscribe((coinbase_tx) => {
          this.query.unsubscribeTx(coinbase_tx.id).subscribe();
          this.query.addTxToBlock(coinbase_tx.id, blk.id).subscribe();
        });

        this.resetBlock();
        this.mem.loadBlocks();

        this.query.subscribeBlock(blk.id).subscribe(() => {
          this.getUserBlockchain();
        });

        this.loadTxs();
      });
    } else {
      this.blockLoser = true;
      setTimeout(() => {
        this.blockLoser = false;
      }, 8000);
      this.mem.loadBlocks();
    }
  });
 }

  /**
 * ===========================
 * Mining Functionality
 * ===========================
 */

 setMerkle() {

  this.merkleHighlight = true;
   setTimeout(() => { this.merkleHighlight = false; }, 500);

  let txData = '';
   this.selectedTxs.forEach((tx) => {
    txData += tx.tx_hash;
   });

   if (this.coinbase) {
    txData += this.coinbase.tx_hash;
   }

   this.merkleRoot = web3.sha3(txData);
 }

  mine() {
    if (!this.coinbaseAdded) {
      this.coinbaseAlert = true;
      return;
    }

    if (!this.blocksLeft) {
      const date = new Date(Date.now());
      const day = date.getDate().toString();
      const month = this.months[date.getMonth()];
      const year = date.getFullYear().toString();
      const hours = date.getHours().toString();
      const minutes = date.getMinutes().toString();
      const seconds = date.getSeconds().toString();
      this.timestamp = month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes + ':' + seconds;
      const data = this.prevBlockHash + this.merkleRoot + this.timestamp + this.numberTxsInBlock;
      const difficulty = this.difficultyTarget;
      this.reset(data, difficulty);
      this.increment(data, difficulty);
    } else {
      this.blockAlert = true;
      return;
    }
  }

  reset(data, difficulty) {
    this.finished = false;
    this.blockHash = '';
    this.nonce = 0;
  }

  increment(data, difficulty): void {
    setTimeout(() => {
      if (web3.sha3(this.nonce + data) >= this.difficulty[difficulty]) {
        this.mining = true;
        this.nonce = this.nonce + 1;
        this.blockHash = web3.sha3(this.nonce + data);
        this.increment(data, difficulty);
      } else {
        // Check to make sure that current user won the mining race
        this.query.getIncomingBlocks(this.user.id).subscribe((blocks) => {
          if (blocks.length === 0) {
            this.mining = false;
            this.blockHash = web3.sha3(this.nonce + data);
            this.finished = true;
          } else {
            this.blockLoser = true;
            setTimeout(() => {
              this.blockLoser = false;
            }, 8000);
            this.mining = false;
            this.mem.loadBlocks();
          }
        });
      }
    }, 200);
  }

/**
 * ===========================
 * Coinbase Transaction
 * ===========================
 */

createCoinbase() {
  let totalFee = 0;

  this.selectedTxs.forEach((tx) => {
    totalFee += +tx.fee;
  });

  this.coinbase = {
    tx_hash: 'Created upon broadcasting block',
    outputs: [
      {
        value: this.blockReward,
        to: this.user.id
      },
      {
        value: totalFee,
        to: this.user.id
      }
    ],
    coinbase: true
  };

  this.coinbaseAlert = false;
  this.coinbaseAdded = true;
  this.finished = false;
  this.setMerkle();
}

removeCoinbase() {
  this.coinbaseAdded = false;
  this.coinbase = null;
  this.finished = false;
  this.setMerkle();
}


/**
 * ===========================
 * Drag and Drop functionality
 * ===========================
 */

  dragStart(event, tx) {
    this.draggedTx = tx;
  }

  drop(event) {
    if (this.blocksLeft) {
      console.log('You must accept or reject all incoming blocks first');
      return;
    }
    if (this.draggedTx) {
        const draggedTxIndex = this.findIndex(this.draggedTx);
        console.log(draggedTxIndex);
        this.selectedTxs = [...this.selectedTxs, this.draggedTx];
        this.txs = this.txs.filter((val, i) => i !== draggedTxIndex);
        this.draggedTx = null;
    }

    this.numberTxsInBlock = this.selectedTxs.length;
    this.finished = false;
    console.log(this.selectedTxs);
    this.setMerkle();
  }

  dragEnd(event) {
      this.draggedTx = null;
  }

  findIndex(tx) {
      let index = -1;
      for (let i = 0; i < this.txs.length; i++) {
          if (tx.tx_hash === this.txs[i].tx_hash) {
              index = i;
              break;
          }
      }
      return index;
  }

  dropSel(event) {
      if (this.draggedTx) {
          const draggedTxIndex = this.findIndexSel(this.draggedTx);
          this.txs = [...this.txs, this.draggedTx];
          this.selectedTxs = this.selectedTxs.filter((val, i) => i !== draggedTxIndex);
          this.draggedTx = null;
      }

    this.numberTxsInBlock = this.selectedTxs.length;
    this.finished = false;
    this.setMerkle();
  }

  findIndexSel(tx) {
    let index = -1;
    for (let i = 0; i < this.selectedTxs.length; i++) {
        if (tx.tx_hash === this.selectedTxs[i].tx_hash) {
            index = i;
            break;
        }
    }
    return index;
  }

}
