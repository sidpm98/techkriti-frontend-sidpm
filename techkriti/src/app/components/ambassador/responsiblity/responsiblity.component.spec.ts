import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblityComponent } from './responsiblity.component';

describe('ResponsiblityComponent', () => {
  let component: ResponsiblityComponent;
  let fixture: ComponentFixture<ResponsiblityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiblityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
