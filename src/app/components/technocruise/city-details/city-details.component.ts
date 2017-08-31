import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {PaymentService} from '../../../../../src-tosc/app/services/payment.service';
import {WorkshopInterface} from '../../../models/workshop.interface';
import {AuthService} from '../../../services/auth.service';
import {TechnocruiseService} from '../../../services/technocruise.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  public workshopStrings = [];
  constructor(private route: ActivatedRoute,
              public technoService: TechnocruiseService,
              private authService: AuthService,
              private paymentService: PaymentService,
              private router: Router) { }
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.technoService.getCityWorkshops(params['city']))
      .subscribe(workshops => {
        this.workshopStrings = [];
        for (const workshop of workshops[0].workshop) {
          if (workshops[0].workshop.hasOwnProperty(workshop)) {

            this.technoService.getWorkshop(workshop).subscribe((work) => {
              this.workshopStrings.push(work);
            });
          }
        }
      });
  }

  payNow(ticketname: string) {
    let eventcode = '';
    this.technoService.getCities().subscribe(cities => {
      for (const city of cities) {
        if (city.name === this.route.snapshot.params.city) {
          eventcode = city.eventcode;
        }
      }
    });
    this.authService.checkLogin().then((res) => {
      if (res === 1) {
        this.router.navigate(['zonals/dashboard']);
      } else if (res === 2) {
        const payPrefill = {
          cq1: this.authService.user._id,
          emailid: this.authService.user.email,
          name: this.authService.user.name,
          ticketname1: `${ ticketname } Workshop`,
          ticketvalue1: 1
        };
        payPrefill['eventcode'] = eventcode;
        this.paymentService.payment(payPrefill);
      } else {
        this.router.navigate(['zonals/login']);
      }
    });
  }
}
