import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    console.log('UserLogin');
    this.loginService.fbLogin()
      .then((res) => {
        this.router.navigate(['dashboard']);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

}
