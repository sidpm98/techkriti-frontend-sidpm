import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscDataComponent } from './tosc-data.component';

describe('ToscDataComponent', () => {
  let component: ToscDataComponent;
  let fixture: ComponentFixture<ToscDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
