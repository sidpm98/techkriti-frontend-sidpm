import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaAboutUsComponent } from './ca-about-us.component';

describe('CaAboutUsComponent', () => {
  let component: CaAboutUsComponent;
  let fixture: ComponentFixture<CaAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
