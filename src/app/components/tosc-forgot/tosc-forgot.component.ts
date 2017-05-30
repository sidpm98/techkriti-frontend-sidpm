import { Component, OnInit } from '@angular/core';

import { ToscService } from '../../services/tosc.service';

@Component({
  selector: 'app-tosc-forgot',
  templateUrl: './tosc-forgot.component.html',
  styleUrls: ['./tosc-forgot.component.css']
})
export class ToscForgotComponent implements OnInit {


  constructor(private toscService: ToscService) { }

  forgotPass() {
    this.toscService.forgot('ssaha@iitk.ac.in')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  ngOnInit() {
    // this.getQueryParams();
    this.forgotPass();
  }

}
