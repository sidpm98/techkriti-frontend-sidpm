import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscForgotComponent } from './tosc-forgot.component';

describe('ToscForgotComponent', () => {
  let component: ToscForgotComponent;
  let fixture: ComponentFixture<ToscForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
