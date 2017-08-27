import {Component, OnInit} from '@angular/core';

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
    // {'name': 'Sponsors', 'link': 'sponsors'},
    {'name': 'Register', 'link': 'register'},
    {'name': 'Contact', 'link': 'contact'},
    {'name': 'Login', 'link': 'login'}
  ];

  constructor() {
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
