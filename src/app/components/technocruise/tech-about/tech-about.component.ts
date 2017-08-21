import {Component, OnInit} from '@angular/core';
import {TechnocruiseService} from '../../../services/technocruise.service';

@Component({
  selector: 'app-tech-about',
  templateUrl: './tech-about.component.html',
  styleUrls: ['./tech-about.component.css']
})
export class TechAboutComponent implements OnInit {
  data: string;

  constructor(public Tech: TechnocruiseService) {
    this.Tech.getAbout()
      .subscribe(res => this.data = res);
  }

  ngOnInit() {
  }

}
