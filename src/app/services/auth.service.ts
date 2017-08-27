import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {FacebookService, InitParams, LoginResponse, LoginStatus} from 'ngx-facebook';

import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ScriptService } from './script.service';

@Injectable()
export class AuthService {

  private waitPromise: Promise<any>;
  private token = '';
  public user: any;

  constructor(private script: ScriptService,
              private http: Http,
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

  checkLogin(): Promise<1 | 2 | 0> {
    console.log('check Login');
    if (this.user) {
      if (this.user.completed) {
        return Promise.resolve(2);
      } else {
        return Promise.resolve(1);
      }
    }
    return this.waitPromise.then(() => this.fb.getLoginStatus().then((res: LoginStatus) => {
      if (res.status === 'connected') {
        this.token = res.authResponse.accessToken;
        return this.backendLogin(res.authResponse.accessToken, res.authResponse.userID);
      } else {
        return 0;
      }
    }));
  }

  fbLogin() {
    return this.waitPromise.then(() => this.fb.login({
      scope: 'email, public_profile'
    }).then((res: LoginResponse) => {
      console.log(res);
      this.token = res.authResponse.accessToken;
      return this.backendLogin(res.authResponse.accessToken, res.authResponse.userID);
    }).catch((err) => console.error(err)));
  }

  backendLogin(accessToken: string, userId: string): Promise<0 | 1 | 2> {
    const url = '/api/techkriti/user.fblogin';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const payload = {
      token: accessToken,
      userId
    };
    return this.http.post(url, payload, {headers})
      .toPromise()
      .then((res) => {
        this.user = res.json();
        if (res.status === 202) {
          if (!this.user.completed) {
            console.log('First Login Attempt');
            return 1;
          } else {
            console.log('Form Filled Completely');
            return 2;
          }
        } else {
          console.log('Offline');
          return 0;
        }
      }).catch((err) => {
      console.error(err);
      return Promise.resolve(0);
    });
  }

  updateUser(user: any) {
    console.log(user);
    const olduser = this.user;
    this.user = user;
    const url = `/api/techkriti/user/${ this.user._id }`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(url, user, { headers })
      .toPromise()
      .then((res_response) => {
        this.user = res_response.json();
        console.log(this.user);
        return user;
      }).catch((err) => {
        this.user = olduser;
        return Promise.reject(err);
      });
  }
}
