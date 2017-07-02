import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTestComponent } from './other-test.component';

describe('OtherTestComponent', () => {
  let component: OtherTestComponent;
  let fixture: ComponentFixture<OtherTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
