import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscLoginComponent } from './tosc-login.component';

describe('ToscLoginComponent', () => {
  let component: ToscLoginComponent;
  let fixture: ComponentFixture<ToscLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
