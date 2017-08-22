import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSidenavComponent } from './tech-sidenav.component';

describe('TechSidenavComponent', () => {
  let component: TechSidenavComponent;
  let fixture: ComponentFixture<TechSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
