import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechCitiesComponent} from './tech-cities.component';

describe('TechCitiesComponent', () => {
  let component: TechCitiesComponent;
  let fixture: ComponentFixture<TechCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechCitiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
