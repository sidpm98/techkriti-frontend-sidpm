import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SchoolService {
  private baseUrl: string = 'api/techkriti/tosc/school/?city=';
  constructor(private http: Http) {}
  public School: any;

  public getSchool(city: string) {
    let url = `${this.baseUrl}${city}`;
    return this.http.get(url)
    .toPromise()
    .then((res) => {
      return res.json();
    })
  }
}
