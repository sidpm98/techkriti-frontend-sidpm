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
    this.router.navigate([`technocruise/${ city.name }`]);
  }

  makePayment(eventcode: string) {
    this.authService.checkLogin().then((res) => {
      if (res === 1) {
        this.router.navigate(['technocruise/dashboard']);
      } else if (res === 2) {
        const payPrefill = {
          cq1: this.authService.user.facebook.id,
          emailid: this.authService.user.email,
          name: this.authService.user.name,
        };
        payPrefill['eventcode'] = eventcode;
        this.paymentService.payment(payPrefill);
      } else {
        console.log('No Internet Connection');
      }
    });

  }

}
