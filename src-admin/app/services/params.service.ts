import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Injectable()

export class ParamsService {
  generateParams(params: {}): URLSearchParams {
    const urlParams = new URLSearchParams;
    for (const key in params) {
      if (!params.hasOwnProperty(key)) {
        continue;
      }
      urlParams.set(key, params[key]);
    }
    return urlParams;
  }
}
