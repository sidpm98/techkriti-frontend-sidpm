import { Component, OnInit } from '@angular/core';

import { ToscService } from '../../services/tosc.service';

@Component({
  selector: 'app-tosc',
  templateUrl: './tosc.component.html',
  styleUrls: ['./tosc.component.css']
})
export class ToscComponent implements OnInit {

  public students: any;
  constructor(private toscService: ToscService) { }

  ngOnInit() {
    this.getToscApplications();
  }

  getToscApplications() {
    this.toscService.getApplications()
      .then((res) => {
        this.students = res;
      })
      .catch((err) => {
        console.error(err);
      });
  }

}
