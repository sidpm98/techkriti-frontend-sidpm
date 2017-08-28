import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tech-sidenav',
  templateUrl: './tech-sidenav.component.html',
  styleUrls: ['./tech-sidenav.component.css']
})

export class TechSidenavComponent implements OnInit {
phn: boolean;
  user: any;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.user = this.authService.user;
    this.phn = (window.screen.width < 1024);
  }
}
