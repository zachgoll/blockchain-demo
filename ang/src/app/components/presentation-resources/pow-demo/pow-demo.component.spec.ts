import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowDemoComponent } from './pow-demo.component';

describe('PowDemoComponent', () => {
  let component: PowDemoComponent;
  let fixture: ComponentFixture<PowDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
