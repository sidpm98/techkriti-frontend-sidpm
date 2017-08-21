import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {TechnocruiseService} from '../../../services/technocruise.service';
import {WorkshopDialogComponent} from './workshop-dialog/workshop-dialog.component';

@Component({
  selector: 'app-tech-workshop',
  templateUrl: './tech-workshop.component.html',
  styleUrls: ['./tech-workshop.component.css']
})
export class TechWorkshopComponent implements OnInit {

  constructor(public dialog: MdDialog, public Tech: TechnocruiseService) {
  }

  openDialog(city_name) {
    const dialogRef = this.dialog.open(WorkshopDialogComponent, {data: city_name});
    dialogRef.afterClosed();
  }

  ngOnInit() {
  }
}
