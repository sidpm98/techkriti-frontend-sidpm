import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAComponent } from './ca.component';

describe('CAComponent', () => {
  let component: CAComponent;
  let fixture: ComponentFixture<CAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
