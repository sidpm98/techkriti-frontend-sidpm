import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscResetComponent } from './tosc-reset.component';

describe('ToscResetComponent', () => {
  let component: ToscResetComponent;
  let fixture: ComponentFixture<ToscResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
