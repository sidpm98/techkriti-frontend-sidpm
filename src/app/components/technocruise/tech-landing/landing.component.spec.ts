import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLandingComponent } from './landing.component';

describe('TechLandingComponent', () => {
  let component: TechLandingComponent;
  let fixture: ComponentFixture<TechLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
