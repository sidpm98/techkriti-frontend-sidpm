import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechWorkshopComponent} from './tech-workshop.component';

describe('TechWorkshopComponent', () => {
  let component: TechWorkshopComponent;
  let fixture: ComponentFixture<TechWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechWorkshopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
