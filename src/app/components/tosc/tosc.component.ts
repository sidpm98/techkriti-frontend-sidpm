import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FbLoginService } from '../../services/auth/fb-login.service';
import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { ToscService } from '../../services/tosc.service';

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
              private router: Router ) { }

  fbLogin() {
    this.fbService.login()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  signIn() {
    this.authService.signIn('anu', '222')
      .then((user) => {
        this.user = user;
        this.currentUser = JSON.parse(localStorage.getItem('User'));
      })
      .catch((err) => {
        console.error(err);
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

  ngOnInit() {
  }

}
