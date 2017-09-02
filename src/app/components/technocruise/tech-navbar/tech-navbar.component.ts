import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tech-navbar',
  templateUrl: './tech-navbar.component.html',
  styleUrls: ['./tech-navbar.component.css']
})
export class TechNavbarComponent implements OnInit {
  menuClicked = true;
  activeTab: string;
  navbar = [
    {'name': 'About', 'link': 'about'},
    {'name': 'Workshop', 'link': 'workshop'},
    {'name': 'Cities', 'link': 'cities'},
    {'name': 'Talks', 'link': 'talks'},
    {'name': 'Events', 'link': 'events'},
    {'name': 'Sponsors', 'link': 'sponsors'},
    {'name': 'Dashboard', 'link': 'dashboard'},
    {'name': 'Contact', 'link': 'contact'}
  ];

  constructor(public authService: AuthService) { }

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
