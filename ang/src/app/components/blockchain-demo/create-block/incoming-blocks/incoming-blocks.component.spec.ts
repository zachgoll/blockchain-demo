import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingBlocksComponent } from './incoming-blocks.component';

describe('IncomingBlocksComponent', () => {
  let component: IncomingBlocksComponent;
  let fixture: ComponentFixture<IncomingBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
