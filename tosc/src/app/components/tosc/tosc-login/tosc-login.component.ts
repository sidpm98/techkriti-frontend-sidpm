import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-tosc-login',
  templateUrl: './tosc-login.component.html',
  styleUrls: ['./tosc-login.component.css']
})
export class ToscLoginComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ToscLoginComponent>) { }

  ngOnInit() {
  }

}
