import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ToscService {

  private headers = new Headers({'Content-Type' : 'application/json'});

  constructor(private http: Http) { }

  getQuiz(): Promise<any> {
    return this.http.get('/api/tosc/quiz')
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err.statusText);
      });
  }

  forgot(email: string): Promise<string> {
    return this.http.get('/api/tosc/forgot', { params: { email: email } })
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }

  reset(resetPayload: any): Promise<any> {
    console.log(resetPayload);
    return this.http.post('/api/tosc/forgot', resetPayload, { headers: this.headers })
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }


}
