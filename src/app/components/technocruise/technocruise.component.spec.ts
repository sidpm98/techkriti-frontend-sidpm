import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechnocruiseComponent} from './technocruise.component';

describe('TechnocruiseComponent', () => {
  let component: TechnocruiseComponent;
  let fixture: ComponentFixture<TechnocruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnocruiseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnocruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
