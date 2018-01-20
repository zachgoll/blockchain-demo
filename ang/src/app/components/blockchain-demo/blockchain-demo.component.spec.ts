import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainDemoComponent } from './blockchain-demo.component';

describe('BlockchainDemoComponent', () => {
  let component: BlockchainDemoComponent;
  let fixture: ComponentFixture<BlockchainDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
