import {Component, OnInit} from '@angular/core';
import {TechnocruiseService} from '../../../services/technocruise.service';

@Component({
  selector: 'app-tech-contact',
  templateUrl: './tech-contact.component.html',
  styleUrls: ['./tech-contact.component.css']
})
export class TechContactComponent implements OnInit {

  constructor(public Tech: TechnocruiseService) {
  }

  ngOnInit() {
  }

}
