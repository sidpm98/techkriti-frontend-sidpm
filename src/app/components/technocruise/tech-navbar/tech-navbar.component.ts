import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tech-navbar',
  templateUrl: './tech-navbar.component.html',
  styleUrls: ['./tech-navbar.component.css']
})
export class TechNavbarComponent implements OnInit {
  menuClicked = true;
  username: string = 'Login';
  activeTab: string;
  navbar = [
    {'name': 'About', 'link': 'about'},
    {'name': 'Workshop', 'link': 'workshop'},
    {'name': 'Cities', 'link': 'cities'},
    {'name': 'Talks', 'link': 'talks'},
    {'name': 'Events', 'link': 'events'},
    // {'name': 'Sponsors', 'link': 'sponsors'},
    {'name': 'Dashboard', 'link': 'dashboard'},
    {'name': 'Contact', 'link': 'contact'},
    {'name': 'Login', 'link': 'login'}
  ];

  constructor(private authService: AuthService) {
    if (this.authService.user !== undefined) {
      this.username = this.authService.user.name;
    } else {
      this.username = 'Login';
    }
  }

  toogleMenu() {
    this.menuClicked = !this.menuClicked;
  }

  menuClick(nav) {
    this.menuClicked = true;
    this.activeTab = nav;
  }

  ngOnInit() {
  }

}
