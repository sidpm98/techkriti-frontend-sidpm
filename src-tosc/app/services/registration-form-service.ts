import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class RegistrationFormService {

  private baseUrl: string = 'api/techkriti/tosc/school/?city=';

  public School: any;
  constructor(private http: Http) {}


  public getSchool(city: string) {
    let url = `${this.baseUrl}${city}`;
    return this.http.get(url)
    .toPromise()
    .then((res) => {
      return res.json();
    });
  }

  public getCity() {
    return this.http.get('/api/techkriti/tosc/city/?involved_in=tosc')
    .toPromise()
    .then((res) => {
      return res.json();
    });
  }

  public registration(user: any) {
    return this.http.post('/api/techkriti/tosc/register', user)
      .toPromise()
      .then((res) => {
        return res.json();
      });
  }

  checkStatus(id: string) {
    const url = `/api/techkriti/tosc/${id}/status`;
    return this.http.get(url)
      .toPromise()
      .then((status) => {
        return status.json().status;
      });
  }
}
