import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkshopDialogComponent} from './workshop-dialog.component';

describe('WorkshopDialogComponent', () => {
  let component: WorkshopDialogComponent;
  let fixture: ComponentFixture<WorkshopDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
