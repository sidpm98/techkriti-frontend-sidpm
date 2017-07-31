import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';

@Injectable()

export class TechHttp {


  constructor(private http: Http,
              private authService: AuthService) {}

  generateHeaders(): Headers {
    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': this.authService.token
    });
    return headers;
  }

  get(url: string, options?: RequestOptionsArgs) {
    return this.request(RequestMethod.Get, url, null, options);
  }

  post(url: string, body?: string, options?: RequestOptionsArgs) {
    return this.request(RequestMethod.Post, url, body, options);
  }

  put(url: string, body?: string, options?: RequestOptionsArgs) {
    return this.request(RequestMethod.Put, url, body, options);
  }

  private request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Promise<Response> {
    const requestOptions = new RequestOptions(Object.assign({
      method,
      url,
      body,
      headers: this.generateHeaders()
    }, options));

    return this.http.request(new Request(requestOptions))
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
}
