import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationResourcesComponent } from './presentation-resources.component';

describe('PresentationResourcesComponent', () => {
  let component: PresentationResourcesComponent;
  let fixture: ComponentFixture<PresentationResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
