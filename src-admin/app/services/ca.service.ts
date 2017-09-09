import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TechHttp } from './tech-http.service';

import {Observable} from 'rxjs/Observable';
import { ParamsService } from './params.service';

@Injectable()

export class CAService {

  constructor(
    private http: TechHttp,
    private https: Http,
    private paramservice: ParamsService
  ) {}

  getApplications(params: {} = null): Observable<any> {
    const urlparams = this.paramservice.generateParams(params);
    return this.https.get(`api/backend/caforms`, { params: urlparams})
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }
}
