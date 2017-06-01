import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscRegisterComponent } from './tosc-register.component';

describe('ToscRegisterComponent', () => {
  let component: ToscRegisterComponent;
  let fixture: ComponentFixture<ToscRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
