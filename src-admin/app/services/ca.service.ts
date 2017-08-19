import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TechHttp } from './tech-http.service';

import { ParamsService } from './params.service';

@Injectable()

export class CAService {

  constructor(
    private http: TechHttp,
    private paramservice: ParamsService
  ) {}

  getApplications(params: {} = null): Promise<any> {
    const urlparams = this.paramservice.generateParams(params);
    return this.http.get(`api/backend/caforms`, { params: urlparams})
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}
