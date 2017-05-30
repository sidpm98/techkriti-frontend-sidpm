import { Injectable } from '@angular/core';

import { FacebookService, InitParams, LoginResponse} from 'ngx-facebook';

@Injectable()
export class FbLoginService {

  constructor(private fb: FacebookService) {
    const params: InitParams = {
      appId: '1023878031002316',
      cookie: true,
      version: 'v2.5'
    };

    fb.init(params);
  }

  login = () => {
    return this.fb.login({
      scope: 'email, publish_actions',
      return_scopes: true
    })
      .then((res: LoginResponse) => {
      console.log(res);
    })
      .catch((error: any) => console.log(error));
  }

}
