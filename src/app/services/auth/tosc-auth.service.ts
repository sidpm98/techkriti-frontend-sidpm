import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ToscAuthService {

  private headers = new Headers({'Content-Type' : 'application/json'});

  currentUser: Promise<string> = Promise.resolve(null);

  constructor(private http: Http) {
    this.currentUser = this.http.get('/api/tosc/user/me')
      .toPromise()
      .then((res: Response) => {
        return res.json().username as string;
      })
      .catch((err) => Promise.resolve(null));
  }

  getUser() {
    return this.currentUser;
  }

  signIn(username: string, password: string): Promise<any> {
    return this.http.post('/api/tosc/user/signin',
                          {'username': username, 'password': password},
                          {headers: this.headers})
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err: any) => {
        return Promise.reject(err.statusText);
      });
  }

  signOut(): Promise<Response> {
    return this.http.get('/api/tosc/user/signout')
      .toPromise()
      .then((res) => {
        this.currentUser = Promise.resolve(null);
        console.log(res.json());
        return res.json();
      })
      .catch((err: any) => {
        return Promise.reject(err.statusText);
      });
  }

}
