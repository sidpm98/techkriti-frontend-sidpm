import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

import { FbLoginService } from '../../services/auth/fb-login.service';
import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { ToscService } from '../../services/tosc.service';

import { ToscLoginComponent } from './tosc-login/tosc-login.component';

@Component({
  selector: 'app-tosc',
  templateUrl: './tosc.component.html',
  styleUrls: ['./tosc.component.css']
})
export class ToscComponent implements OnInit {

  private user: any;
  private currentUser: any;

  constructor(private authService: ToscAuthService,
              private toscService: ToscService,
              private fbService: FbLoginService,
              private router: Router,
              private dialog: MdDialog) { }

  fbLogin() {
    this.fbService.login()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  openSignIn() {
    let height = '40vmin';
    let width = '40vmin';
    if (window.innerWidth <= 412 ) {
      width = '60vw';
      height = '300px';
    }
    const dialogRef = this.dialog.open(ToscLoginComponent, {
      hasBackdrop: true,
      width: width,
      height: height
    });
  }

  logOut() {
    this.authService.signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  isLoggedIn() {
     this.authService.getUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

    userQuiz() {
      this.toscService.getQuiz()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }

  gotoToscForgot() {
    this.router.navigate(['tosc-forgot']);
  }

  gotoRegister() {
    this.router.navigate(['tosc-register']);
  }

  gotoBackend() {
    this.router.navigate(['backend']);
  }

  ngOnInit() {
  }

}
