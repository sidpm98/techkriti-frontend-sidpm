import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-why',
  templateUrl: './ca-why.component.html',
  styleUrls: ['./ca-why.component.css']
})
export class CaWhyComponent implements OnInit {

  whyData: string[] = [
    'Chance to organize Workshops, National level Competitions of Techkriti in your College.',
    'Chance to improve Communication and Technical Skills',
    'Golden opportunity to get involved in national level event promotion and brand management',
    'Opportunity to be a part of a pool of thousands of enthusiastic and innovative students from all across the country',
    'Chance to keep abreast of recent trends in Entrepreneurship and cutting-edge technologies from IIT Kanpur'
  ]

  constructor() { }

  ngOnInit() {
  }

}
