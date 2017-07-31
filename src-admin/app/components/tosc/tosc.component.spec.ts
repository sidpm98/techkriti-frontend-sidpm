import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscComponent } from './tosc.component';

describe('ToscComponent', () => {
  let component: ToscComponent;
  let fixture: ComponentFixture<ToscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
