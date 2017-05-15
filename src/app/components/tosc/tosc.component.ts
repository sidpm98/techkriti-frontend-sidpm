import { Component, OnInit } from '@angular/core';

import { ToscAuthService } from '../../services/auth/tosc-auth.service';

@Component({
  selector: 'app-tosc',
  templateUrl: './tosc.component.html',
  styleUrls: ['./tosc.component.css']
})
export class ToscComponent implements OnInit {

  private user: any;

  constructor(private authService: ToscAuthService) { }

  signIn() {
    this.authService.signIn('anu', '222')
      .then((user) => {
        this.user = user;
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
        console.log(err);
      });
  }

  ngOnInit() {
    this.logOut();
    // this.isLoggedIn();
    // this.signIn();
  }

}
