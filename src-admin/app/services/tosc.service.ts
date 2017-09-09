import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { saveAs } from 'file-saver';
import { TechHttp } from './tech-http.service';

import {Observable} from 'rxjs/Observable';
import { ParamsService } from './params.service';

@Injectable()

export class ToscService {

  constructor(
    private http: TechHttp,
    private https: Http,
    private paramService: ParamsService
  ) {}

  getApplications(params: {} = null): Observable<any> {
    const urlparams = this.paramService.generateParams(params);
    return this.http.get(`api/backend/formstosc`, { params: urlparams })
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

  // download(field: {} = null): Observable<any> {
  //   const params = this.paramService.generateParams(field);
  //   return this.http.get('api/backend/excel/formstosc', { params })
  //     .map((data: any) => {
  //       console.log(data);
  //       this.downloadFile(atob(data._body));
  //       return data;
  //     });
  // }

  // downloadFile(data: any) {
  //   const blob = new Blob([data], {type: 'application/excel'});
  //   const file = new File([blob], 'download.xlsx', {type: 'application/excel'});
    // saveAs(file, 'report.xlsx');
    // console.log(file);
    // let url= window.URL.createObjectURL(blob);
    // let blob1 = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    // console.log(url);
    // console.log(blob);
  //   // window.open(url);
  // }
}
