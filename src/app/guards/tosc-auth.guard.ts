import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ToscAuthService } from '../services/auth/tosc-auth.service';

@Injectable()

export class ToscAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: ToscAuthService) {}

  canActivate(): Promise<boolean> {
    return this.authService.getUser().then((user) => {
      console.log(user);
      if (user != null) {
        return true;
      } else {
        this.router.navigate(['tosc']);
      }
    });
  }
}
