import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashDemoComponent } from './hash-demo.component';

describe('HashDemoComponent', () => {
  let component: HashDemoComponent;
  let fixture: ComponentFixture<HashDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
