import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AuthService {

  public token: string;

  constructor(private http: Http,
              private router: Router) {
    this.getToken();
  }

  getToken() {
    this.token = localStorage.getItem('token');
  }

  public login(username: string, password: string): Promise<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = '/api/backend/user/get-token';
    const data = { 'username': username, 'password': password };
    return this.http.post(url, data, { headers })
      .toPromise()
      .then((res) => {
        const token = res.json().token;
        localStorage.setItem('token', token);
        return 'Login successful';
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }
  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);

  }
}
