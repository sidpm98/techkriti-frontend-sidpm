import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSponserComponent } from './tech-sponser.component';

describe('TechSponserComponent', () => {
  let component: TechSponserComponent;
  let fixture: ComponentFixture<TechSponserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSponserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
