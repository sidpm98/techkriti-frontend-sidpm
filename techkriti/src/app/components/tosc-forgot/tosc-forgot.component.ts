import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ToscService } from '../../services/tosc.service';

@Component({
  selector: 'app-tosc-forgot',
  templateUrl: './tosc-forgot.component.html',
  styleUrls: ['./tosc-forgot.component.css']
})
export class ToscForgotComponent implements OnInit {

  @Output() private backFlag: EventEmitter<boolean> = new EventEmitter<false>();
  private email: string;

  constructor(private toscService: ToscService) { }

  forgotPass() {
    this.toscService.forgot(this.email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  back() {
    this.backFlag.emit(false);
  }

  ngOnInit() {
  }

}
