import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming-blocks',
  templateUrl: './incoming-blocks.component.html',
  styleUrls: ['./incoming-blocks.component.css']
})
export class IncomingBlocksComponent implements OnInit {

  constructor() { }

  items = [
    /*
    {hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B', txs: [{hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}]},
    {hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B', txs: [{hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}]},
    {hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B', txs: [{hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}]},
    {hash: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E13B', txs: [{hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}, {hash: 'hashshashdfahsdf'}]}
 */
  ];


  ngOnInit() {
  }

}
