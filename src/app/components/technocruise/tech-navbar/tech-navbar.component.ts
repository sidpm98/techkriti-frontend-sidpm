import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-navbar',
  templateUrl: './tech-navbar.component.html',
  styleUrls: ['./tech-navbar.component.css']
})
export class TechNavbarComponent implements OnInit {

  navbar: [
    {'name': 'About', 'link': 'about'},
    {'name': 'Talks', 'link': 'talks'},
    {'name': 'Events', 'link': 'events'},
    {'name': 'Workshop', 'link': 'workshop'},
    {'name': 'Cities', 'link': 'cities'},
    {'name': 'Contact', 'link': 'contact'},
    {'name': 'Sponsers', 'link': 'sponsers'},
    {'name': 'Register', 'link': 'register'},
    {'name': 'Login', 'link': 'login'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
