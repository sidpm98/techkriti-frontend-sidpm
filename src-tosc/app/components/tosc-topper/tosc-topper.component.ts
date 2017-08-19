import { Component, Inject, Input, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-tosc-topper',
  templateUrl: './tosc-topper.component.html',
  styleUrls: ['./tosc-topper.component.css']
})
export class ToscTopperComponent implements OnInit {

  @Input() topper: any;

  constructor(private dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(TopperWriteUpComponent, {
      width: '75vmax',
      data: {
        data: this.topper
      }
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-topper-writeup',
  templateUrl: './topper-writeup.html',
  styleUrls: ['./topper-writeup.css']
})

export class TopperWriteUpComponent  {

  public topper: any;

  constructor(public dialogRef: MdDialogRef<TopperWriteUpComponent>,
             @Inject(MD_DIALOG_DATA) public data: any) {
    this.topper = this.data.data;
  }
}
