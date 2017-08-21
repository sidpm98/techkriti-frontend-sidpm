import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {WorkshopInterface} from '../../../../models/workshop.interface';
import {TechnocruiseService} from '../../../../services/technocruise.service';

@Component({
  selector: 'app-workshop-dialog',
  templateUrl: './workshop-dialog.component.html',
  styleUrls: ['./workshop-dialog.component.css']
})

export class WorkshopDialogComponent implements OnInit {
  public data: WorkshopInterface;

  constructor(public dialogRef: MdDialogRef<WorkshopDialogComponent>,
              public Tech: TechnocruiseService,
              @Inject(MD_DIALOG_DATA) public city_name: any) {
  }

  ngOnInit(): void {
    this.Tech.getCityWorkshops(this.city_name)
      .subscribe(workshop => this.data = workshop);
  }
}
