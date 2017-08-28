import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoLoginComponent } from './techno-login.component';

describe('TechnoLoginComponent', () => {
  let component: TechnoLoginComponent;
  let fixture: ComponentFixture<TechnoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
