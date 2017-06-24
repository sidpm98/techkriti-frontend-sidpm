import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscTopperComponent } from './tosc-topper.component';

describe('ToscTopperComponent', () => {
  let component: ToscTopperComponent;
  let fixture: ComponentFixture<ToscTopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscTopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscTopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
