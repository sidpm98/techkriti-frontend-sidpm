import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-techno-login',
  templateUrl: './techno-login.component.html',
  styleUrls: ['./techno-login.component.css']
})
export class TechnoLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.fbLogin().then(() => {
      this.router.navigate(['zonals/dashboard'])
    });
  }

}
