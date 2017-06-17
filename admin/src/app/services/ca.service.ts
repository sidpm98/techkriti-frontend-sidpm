import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ParamsService } from './params.service';

@Injectable()

export class CAService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private paramservice : ParamsService
  ){}

  getApplications(params: {} = null): Promise<any> {
    let urlparams = this.paramservice.generateParams(params);
    return this.http.get(`api/backend/techkriti/CAforms`, {headers: this.headers, params: urlparams})
      .toPromise()
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}

