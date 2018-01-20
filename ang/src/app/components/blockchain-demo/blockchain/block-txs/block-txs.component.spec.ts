import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTxsComponent } from './block-txs.component';

describe('BlockTxsComponent', () => {
  let component: BlockTxsComponent;
  let fixture: ComponentFixture<BlockTxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
