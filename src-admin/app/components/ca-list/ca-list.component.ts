import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-list',
  templateUrl: './ca-list.component.html',
  styleUrls: ['./ca-list.component.css']
})
export class CaListComponent implements OnInit {

  @Input() ca: any;
  public detailFlag = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetail(ca: any) {
    this.detailFlag = !this.detailFlag;
  }
}
