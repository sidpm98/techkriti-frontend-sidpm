import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaContactComponent } from './ca-contact.component';

describe('CaContactComponent', () => {
  let component: CaContactComponent;
  let fixture: ComponentFixture<CaContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
