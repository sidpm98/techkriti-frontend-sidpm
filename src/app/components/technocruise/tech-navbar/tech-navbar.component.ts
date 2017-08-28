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
    {'name': 'Register', 'link': 'dehradun'},
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

  constructor(private authService: AuthService) { }

  toogleMenu() {
    this.menuClicked = !this.menuClicked;
  }

  signOut() {
    this.authService.logout();
  }

  menuClick(nav) {
    this.menuClicked = true;
    this.activeTab = nav;
  }

  ngOnInit() {
  }

}
