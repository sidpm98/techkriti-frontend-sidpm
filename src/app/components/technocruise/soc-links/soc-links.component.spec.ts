import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocLinksComponent } from './soc-links.component';

describe('SocLinksComponent', () => {
  let component: SocLinksComponent;
  let fixture: ComponentFixture<SocLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
