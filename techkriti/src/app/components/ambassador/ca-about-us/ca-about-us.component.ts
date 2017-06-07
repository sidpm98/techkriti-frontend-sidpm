import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ca-about-us',
  templateUrl: './ca-about-us.component.html',
  styleUrls: ['./ca-about-us.component.css'],

})
export class CaAboutUsComponent implements OnInit {

  abData = {
    header: 'About Us',
    body1: 'Become a part of',
    body2: "ASIA'S LARGEST TECHNICAL AND ENTREPRENEURIAL FESTIVAL",
    body3: 'Techkriti is the annual technical and entrepreneurial festival of IIT Kanpur. Every year we impute ambassadors from different colleges throughout the country whose main responsibility is to publicize Techkriti, in and out of his/her college. While giving them the opportunity to develop their organizational and management skills.'
  };



  constructor() { }

  ngOnInit() {
  }

}
