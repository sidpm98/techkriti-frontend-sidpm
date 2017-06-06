import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incentives',
  templateUrl: './incentives.component.html',
  styleUrls: ['./incentives.component.css']
})
export class IncentivesComponent implements OnInit {

  private incentives: string[] = [	'A Certificate of Appreciation Undersigned by Techkriti’18 IIT Kanpur',
                                    'Frequent Opportunities to win Techkriti’18 goodies and also e-goodies',
                                    'Top Ambassadors will get a chance to attend Workshops at Techkriti’18 IITK',
                                    'A chance to attend the Boeing Workshop Organised by Boeing at IIT Kanpur',
                                    'Top campus ambassadors will be felicitated with Special Appreciation Award',
                                    'Recognition in the form of name integration on the Techkriti’18 Website'];


  constructor() { }
  
  ngOnInit() {
  }

}
