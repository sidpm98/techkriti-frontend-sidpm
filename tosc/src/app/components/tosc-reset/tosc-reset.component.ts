import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ToscService } from '../../services/tosc.service';

@Component({
  selector: 'app-tosc-reset',
  templateUrl: './tosc-reset.component.html',
  styleUrls: ['./tosc-reset.component.css']
})
export class ToscResetComponent implements OnInit {

  private newPass: string = '321';

  constructor(private route: ActivatedRoute,
              private toscService: ToscService) { }

    resetPass() {
    this.route.queryParams.subscribe((params: Params) => {
      const resetPayload = {};
      resetPayload['email'] = params['u'];
      resetPayload['date'] = params['t'];
      resetPayload['hash'] = params['h'];
      resetPayload['new_password'] = this.newPass;
      this.toscService.reset(resetPayload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  ngOnInit() {
  }

}
