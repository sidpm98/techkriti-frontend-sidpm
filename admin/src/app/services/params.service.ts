import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Injectable()

export class ParamsService {
  generateParams(params : {}) : URLSearchParams{
    let urlParams = new URLSearchParams;
    for(let key in params){
      urlParams.set(key, params[key]);
    }
    return urlParams;
  }
}
