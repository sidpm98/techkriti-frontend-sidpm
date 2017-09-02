import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tech-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class TechLandingComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.fbLogin().then(() => {
      this.router.navigate(['technocruise/dashboard']);
    });
  }

}
