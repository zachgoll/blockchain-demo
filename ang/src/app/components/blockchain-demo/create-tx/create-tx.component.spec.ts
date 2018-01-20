import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTxComponent } from './create-tx.component';

describe('CreateTxComponent', () => {
  let component: CreateTxComponent;
  let fixture: ComponentFixture<CreateTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
