import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechContactComponent } from './tech-contact.component';

describe('TechContactComponent', () => {
  let component: TechContactComponent;
  let fixture: ComponentFixture<TechContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
