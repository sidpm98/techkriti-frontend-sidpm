import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {TechnocruiseService} from '../../../services/technocruise.service';

@Component({
  selector: 'app-tech-cities',
  templateUrl: './tech-cities.component.html',
  styleUrls: ['./tech-cities.component.css']
})
export class TechCitiesComponent implements OnInit {
  cities;
  constructor(public tech: TechnocruiseService,
              private router: Router) {
    tech.getCities().subscribe(res => this.cities = res);
  }
  getCities() {
    const ncities = _.values(_.groupBy(this.cities, 'row'));
    return ncities;
  }
  ngOnInit() {
  }

  gotoWorkshop(city) {
    this.router.navigate([`technocruise/${ city.name }`]);
  }
}
