import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-process',
  templateUrl: './application-process.component.html',
  styleUrls: ['./application-process.component.css']
})
export class ApplicationProcessComponent implements OnInit {

  private apData = {
    header: {
      one: 'Application Process',
      second: 'Eligibility'
    },
    body: {
      one: 'The nomination form for the ambassadors is attached here along the link. Based upon the form you will be interviewed telephonically. After that, based upon short listing you will be informed about your selection. There are no specific constraints on year in which you study, we need only enthusiasm and sincerity towards the post.',

      second: 'There are no specific constraints on year in which you study, we need only enthusiasm and sincerity towards the post. At the same time if you are a resourceful person it will surely add up to your chances but is not the criteria for short listing.'
    }
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoRegister() {
    this.router.navigate(['ambassador/register']);
  }

}
