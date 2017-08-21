import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TechAboutComponent} from './tech-about.component';

describe('TechAboutComponent', () => {
  let component: TechAboutComponent;
  let fixture: ComponentFixture<TechAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechAboutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
