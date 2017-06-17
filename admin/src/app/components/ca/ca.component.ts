import { Component, OnInit, OnChanges } from '@angular/core';
import { CAService } from '../../services/ca.service';

@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CAComponent implements OnInit {
  public results: any;

  constructor(
    private caService : CAService
  ) { }

  ngOnInit() {
    this.getCAForms()
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
