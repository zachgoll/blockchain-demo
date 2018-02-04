import { Block } from './../../block.model';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QueryService } from '../../../../services/query.service';

@Component({
  selector: 'app-incoming-blocks',
  templateUrl: './incoming-blocks.component.html',
  styleUrls: ['./incoming-blocks.component.css']
})
export class IncomingBlocksComponent implements OnInit {

  constructor(private authService: AuthService, private query: QueryService) { }

  @Output() blockSubscribed = new EventEmitter();
  @Output() noMoreBlocks = new EventEmitter();

  user: any;

  blocks: Block[] = [];

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loadBlocks();
  }

  loadBlocks() {
    this.query.getIncomingBlocks(this.user.id).subscribe((blocks) => {
      if (blocks.length === 0) {
        this.noMoreBlocks.emit();
      }
      this.blocks = blocks;
    });
  }

  accept(index: number) {
    const block_id = this.blocks[index].id;

    this.query.subscribeBlock(block_id).subscribe(() => {
      this.loadBlocks();
    });

    this.query.getBlockTxs(block_id).subscribe((txs) => {
      txs.forEach((tx) => {
        this.query.getOutputs(tx.id).subscribe((t) => {
          t.forEach((t_output) => {
            this.query.subscribeUtxo(t_output.id).subscribe();
          });
        });
        this.query.getInputs(tx.id).subscribe((t) => {
          t.forEach((t_input) => {
            this.query.unsubUtxo(t_input.id).subscribe();
          });
        });
        this.query.unsubscribeTx(tx.id).subscribe(() => {
          this.blockSubscribed.emit();
        });
      });
    });
  }

  reject(index: number) {
    const block_id = this.blocks[index].id;

    this.query.rejectBlock(block_id).subscribe(() => {
      this.loadBlocks();
    });

    this.query.getBlockTxs(block_id).subscribe((txs) => {
      txs.forEach((tx) => {
        this.query.rejectTx(tx.id).subscribe();
      });
    });

    // Emit an event that can be sent to create-tx component
    this.blockSubscribed.emit();
  }



}
