import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsiblity',
  templateUrl: './responsiblity.component.html',
  styleUrls: ['./responsiblity.component.css']
})
export class ResponsiblityComponent implements OnInit {

  resHeading: string[] = ['Responsiblity Coordination',
                                  'Publicity',
                                  'Social Media',
                                  'Tasks'];
  resBody: string[] = [
    'Organization of workshops and events in the respective college with the help of Techkriti.',
    "Display of Techkriti '18 posters on the students' notice board(s) of the respective college, within 4 days of receiving them.",
    'Publicizing Techkriti events on various social media channels by sharing and posting (in different groups).',
    "Forwarding the mails related to Techkriti to the students' mailing list of the respective college. Based on the skills provided in the form, a festival task would be assigned which is expected to be completed in a given time frame."
  ];

  constructor() { }

  ngOnInit() {
  }

}
