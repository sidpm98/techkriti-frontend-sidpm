import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { TechHttp } from './tech-http.service';

import {Observable} from 'rxjs/Observable';
import { ParamsService } from './params.service';

@Injectable()

export class ToscDataService {

  constructor(
    private http: TechHttp,
    private https: Http,
    private paramService: ParamsService
  ) {}

  getApplications(params: {} = null): Observable<any> {
    const urlparams = this.paramService.generateParams(params);
    return this.http.get(`api/backend/formstosc`, { params: urlparams })
      .map((res) => {
        return res.json();
      });
  }

  delete(id: string): Observable<string> {
    const url = `api/backend/formstosc/${ id }`;
    return this.http.delete(url)
      .map(() => {
      return 'Student Successfully Deleted';
      });
  }

  public getCity() {
    return this.https.get('/api/techkriti/tosc/city/?involved_in=tosc')
    .toPromise()
    .then((res) => {
      return res.json();
    });
  }
}
