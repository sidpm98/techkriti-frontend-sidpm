import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-tech-sidenav',
  templateUrl: './tech-sidenav.component.html',
  styleUrls: ['./tech-sidenav.component.css']
})
export class TechSidenavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: any;
  ngOnInit() {
    this.user = this.authService.user;
  }

}
