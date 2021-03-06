import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

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

}
