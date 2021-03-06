import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-other-test',
  templateUrl: './other-test.component.html',
  styleUrls: ['./other-test.component.css']
})
export class OtherTestComponent implements OnInit {

  public students: any;

  constructor(public dialogRef: MdDialogRef<OtherTestComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.students = this.data.data;
  }

  ngOnInit() {
  }

}
