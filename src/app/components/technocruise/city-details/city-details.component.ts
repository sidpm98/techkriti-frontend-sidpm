import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {TechnocruiseService} from '../../../services/technocruise.service';
import {WorkshopInterface} from '../../../models/workshop.interface';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  public workshop: WorkshopInterface;
  constructor(private route: ActivatedRoute,
              private technoService: TechnocruiseService) { }

  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.technoService.getCityWorkshops(params['city']))
      .subscribe(workshop => {
        this.workshop = workshop;
        console.log(workshop);
      });
  }

}
