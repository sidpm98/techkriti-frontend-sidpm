import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNavbarComponent } from './tech-navbar.component';

describe('TechNavbarComponent', () => {
  let component: TechNavbarComponent;
  let fixture: ComponentFixture<TechNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
