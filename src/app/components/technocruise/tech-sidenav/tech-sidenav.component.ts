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

@Component({
  selector: 'app-dialog-sidenav',
  templateUrl: './dialog-sidenav.component.html',
  styleUrls: ['./tech-sidenav.component.css']
})

export class DialogSidenavComponent implements OnInit {
  phn: boolean;
  constructor() {}
  ngOnInit() {
    this.phn = (window.screen.width < 1024);
  }
}
