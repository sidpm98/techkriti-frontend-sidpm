import { Component, OnInit, Input, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tosc-topper',
  templateUrl: './tosc-topper.component.html',
  styleUrls: ['./tosc-topper.component.css']
})
export class ToscTopperComponent implements OnInit {

  @Input() topper: any;

  constructor(private dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(TopperWriteUp, {
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


export class TopperWriteUp  {

  public topper: any;

  constructor(public dialogRef: MdDialogRef<TopperWriteUp>,
             @Inject(MD_DIALOG_DATA) public data: any) {
    this.topper = this.data.data;
  }
}
