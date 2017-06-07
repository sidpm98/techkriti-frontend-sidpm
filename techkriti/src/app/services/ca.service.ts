import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class CAService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  submit(submitPayLoad: any): Promise<any> {
    console.log("Serivice called");
    return this.http.post('api/techkriti/ambassador', submitPayLoad, {headers: this.headers })
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
}
