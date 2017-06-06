import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaWhyComponent } from './ca-why.component';

describe('CaWhyComponent', () => {
  let component: CaWhyComponent;
  let fixture: ComponentFixture<CaWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
