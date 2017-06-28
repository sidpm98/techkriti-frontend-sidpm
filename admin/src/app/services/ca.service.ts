import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { TechHttp } from './tech-http.service';
import 'rxjs/add/operator/toPromise';

import { ParamsService } from './params.service';

@Injectable()

export class CAService {


  constructor(
    private http: TechHttp,
    private paramservice: ParamsService
  ) {}

  getApplications(params: {} = null): Promise<any> {
    const urlparams = this.paramservice.generateParams(params);
    return this.http.get(`api/backend/techkriti/caforms`, { params: urlparams})
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}
