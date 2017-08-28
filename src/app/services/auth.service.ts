import {Component, Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {FacebookService, InitParams, LoginResponse, LoginStatus} from 'ngx-facebook';

import 'rxjs/add/operator/toPromise';
import { ScriptService } from './script.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `
    <p> Please Check Your Internet Connection </p>
    <p> Also <b>firefox private browsing</b> is not supported </p>
  `
})
export class DialogComponent {}

@Component({
  selector: 'app-wait-dialog',
  template: `<md-spinner></md-spinner>`
})
export class WaitDialogComponent {}

@Injectable()
export class AuthService {

  private waitPromise: Promise<any>;
  private token = '';
  public user: any;

  constructor(private script: ScriptService,
              private http: Http,
              private router: Router,
              private fb: FacebookService,
              private dialog: MdDialog) {
    const params: InitParams = {
      // appId: '1592892520744958',
      appId: '1023878031002316',
      version: 'v2.5',
      cookie: true
    };
    this.waitPromise = this.script.loadScript('facebook')
      .then(() => this.fb.init(params))
      .catch((err) => this.dialog.open(DialogComponent));
  }

  checkLogin(): Promise<1 | 2 | 0> {
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
        const dialogRef = this.dialog.open(WaitDialogComponent);
        return this.backendLogin(res.authResponse.accessToken, res.authResponse.userID, dialogRef);
      } else {
        return 0;
      }
    }));
  }

  fbLogin() {
    return this.waitPromise.then(() => this.fb.login({
      scope: 'email, public_profile'
    }).then((res: LoginResponse) => {
      this.token = res.authResponse.accessToken;
      const dialogRef = this.dialog.open(WaitDialogComponent)
      return this.backendLogin(res.authResponse.accessToken, res.authResponse.userID, dialogRef);
    }).catch((err) => console.error(err)));
  }

  backendLogin(accessToken: string, userId: string, dialogRef: MdDialogRef<WaitDialogComponent>): Promise<0 | 1 | 2> {
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
        dialogRef.close();
        if (res.status === 202) {
          this.user = res.json();
          if (!this.user.completed) {
            return 1;
          } else {
            return 2;
          }
        } else {
          return 0;
        }
      }).catch((err) => {
        dialogRef.close();
        console.error(err);
        return Promise.resolve(0);
      });
  }

  updateUser(user: any) {
    console.log(user);
    const olduser = this.user;
    this.user = user;
    const url = `/api/techkriti/user`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(url, user, { headers })
      .toPromise()
      .then((res_response) => {
        this.user = res_response.json();
        return user;
      }).catch((err) => {
        this.user = olduser;
        return Promise.reject(err);
      });
  }

  logout() {
    const url = '/api/techkriti/user.logout';
    return this.http.post(url, {})
      .toPromise()
      .then(() => {
      this.user = null;
        this.router.navigate(['zonals']);
      })
      .catch((err) => {
        console.error('err');
      });
  }
}
