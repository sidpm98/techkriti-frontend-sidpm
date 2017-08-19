import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class CAService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  submit(submitPayLoad: any): Promise<any> {
    return this.http.post('api/techkriti/ambassador', submitPayLoad, {headers: this.headers })
      .toPromise()
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}
