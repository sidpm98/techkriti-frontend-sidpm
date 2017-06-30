import { Component, OnInit, OnChanges } from '@angular/core';
import { CAService } from '../../services/ca.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CAComponent implements OnInit {
  public results: any;

  constructor(private caService: CAService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getCAForms();
  }

  getCAForms() {
    this.caService.getApplications()
      .then((res) => {
        this.results = res;
      })
      .catch((err) => {
        console.error(err);
      });
  }

}
