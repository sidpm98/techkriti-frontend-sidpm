import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {TechnocruiseService} from '../../../services/technocruise.service';
import {AuthService} from '../../../services/auth.service';
import {PaymentService} from '../../../../../src-tosc/app/services/payment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tech-cities',
  templateUrl: './tech-cities.component.html',
  styleUrls: ['./tech-cities.component.css']
})
export class TechCitiesComponent implements OnInit {
  cities;
  constructor(public tech: TechnocruiseService,
              private authService: AuthService,
              private router: Router,
              private paymentService: PaymentService) {
    tech.getCities().subscribe(res => this.cities = res);
  }
  getCities() {
    const ncities = _.values(_.groupBy(this.cities, 'row'));
    return ncities;
  }
  ngOnInit() {
  }

  gotoWorkshop(city) {
    this.router.navigate([`zonals/${ city.name }`]);
  }

  makePayment(eventcode: string) {

  }

}
