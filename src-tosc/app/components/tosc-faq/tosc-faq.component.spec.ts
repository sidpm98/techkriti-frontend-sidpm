import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToscFaqComponent } from './tosc-faq.component';

describe('ToscFaqComponent', () => {
  let component: ToscFaqComponent;
  let fixture: ComponentFixture<ToscFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToscFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToscFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
