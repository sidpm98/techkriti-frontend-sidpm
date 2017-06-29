import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ca-detail',
  templateUrl: './ca-detail.component.html',
  styleUrls: ['./ca-detail.component.css']
})
export class CaDetailComponent implements OnInit {

  public questions : string[]=[
    "Primary Motive",
    "Relevent Experience",
    "Approach",
    "Skills",
    "Can organize workshop ?"
  ]
  @Input() ca: any;
  constructor(
  ) { }

  ngOnInit() {
  }


}
