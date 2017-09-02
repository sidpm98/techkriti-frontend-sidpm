import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-techno-ticket',
  templateUrl: './techno-ticket.component.html',
  styleUrls: ['./techno-ticket.component.css']
})
export class TechnoTicketComponent implements OnInit {

  @Input()
  ticket: any;

  constructor() { }

  ngOnInit() {
  }

}
