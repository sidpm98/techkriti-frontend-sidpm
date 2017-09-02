import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoTicketComponent } from './techno-ticket.component';

describe('TechnoTicketComponent', () => {
  let component: TechnoTicketComponent;
  let fixture: ComponentFixture<TechnoTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnoTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
