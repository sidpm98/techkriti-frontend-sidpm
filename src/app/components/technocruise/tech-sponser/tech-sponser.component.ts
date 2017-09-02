import {Component, OnInit} from '@angular/core';
import {TechnocruiseService} from '../../../services/technocruise.service';

@Component({
  selector: 'app-tech-sponser',
  templateUrl: './tech-sponser.component.html',
  styleUrls: ['./tech-sponser.component.css']
})
export class TechSponserComponent implements OnInit {

  constructor(public Tech: TechnocruiseService) {
  }

  ngOnInit() {
  }

}
