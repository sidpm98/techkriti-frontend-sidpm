import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourcesService {

  constructor(private http: Http) { }

  getResources(): Promise<any> {
    return this.http.get('api/techkriti/tosc/resources')
      .toPromise()
      .then((res) => {
        return res.json();
      });
  }

}
