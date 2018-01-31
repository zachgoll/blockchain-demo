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

  user: any;

  blocks: Block[] = [];

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loadBlocks();
  }

  loadBlocks() {
    this.query.getIncomingBlocks(this.user.id).subscribe((blocks) => {
      console.log(blocks);
      this.blocks = blocks;
      console.log(this.blocks);
    });
  }

  accept(index: number) {
    // Emit an event that can be sent to create-tx component
    this.blockSubscribed.emit();
  }

  reject(index: number) {
    // Emit an event that can be sent to create-tx component
    this.blockSubscribed.emit();
  }



}
