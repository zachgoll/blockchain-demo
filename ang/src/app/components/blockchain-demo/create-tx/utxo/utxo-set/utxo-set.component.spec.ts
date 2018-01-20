import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtxoSetComponent } from './utxo-set.component';

describe('UtxoSetComponent', () => {
  let component: UtxoSetComponent;
  let fixture: ComponentFixture<UtxoSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtxoSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtxoSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
