import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class GuardsService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MdSnackBar) { }

  canActivate(): Promise<never | boolean> {
    return this.authService.checkLogin()
      .then((res: 0 | 1 | 2) => {
        if (res === 0) {
          this.snackbar.open('Please Register', '', {
            duration: 2000
          });
          this.router.navigate(['technocruise/dashboard']);
          return false;
        }
        return true;
      });
  }
}

@Injectable()
export class UpdateGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MdSnackBar) { }

  canActivate(): Promise<never | boolean> {
    return this.authService.checkLogin()
      .then((res: 0 | 1 | 2) => {
        if (res === 1) {
          this.snackbar.open('Please fill the form', '', {
            duration: 2000
          });
          return true;
        } else if (res === 0) {
          this.router.navigate(['../technocruise']);
          return false;
        } else {
          return true;
        }
      });
  }
}

@Injectable()
export class LoggedInGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private snackbar: MdSnackBar) { }

  canActivate(): Promise<never | boolean> {
    console.log('logged In guard service');
    return this.authService.checkLogin()
      .then((res: 0 | 1 | 2) => {
        if (res === 2) {
          return true;
        } else if (res === 1) {
          this.snackbar.open('Please fill the form', '', {
            duration: 2000
          });
          this.router.navigate(['technocruise/dashboard']);
          return false;
        } else if (res === 0) {
          this.router.navigate(['../technocruise']);
          return false;
        }
        return false;
      });
  }
}

@Injectable()
export class WeakLoggedInGaurd implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(): Promise<boolean> {
    console.log('Weak Log In');
    return this.authService.checkLogin().then((res) => {
      if (res === 0) {
        this.router.navigate(['../technocruise']);
        return false;
      } else {
        return true;
      }
    });
  }
}
