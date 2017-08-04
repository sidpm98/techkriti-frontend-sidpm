import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

import { ScriptService } from './script.service';

@Injectable()
export class LoginService {

  private waitPromise: Promise<any>;

  constructor(private script: ScriptService,
              private fb: FacebookService) {
    const params: InitParams = {
      appId: '1592892520744958',
      version: 'v2.5',
      cookie: true
    };
    this.waitPromise = this.script.loadScript('facebook')
      .then(() => this.fb.init(params))
      .catch((err) => console.error(err));
  }

  fbLogin() {
    return this.waitPromise.then(() => this.fb.login({
      scope: 'email, publish_actions'
    }).then((res: LoginResponse) => {
      return res.authResponse.userID;
    }).catch((err) => console.error(err)));
  }
}
