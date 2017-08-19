import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ScriptService } from './script.service';

declare var popupWithAutoFill: any;

@Injectable()

export class PaymentService {

  waitPromise: Promise<any>;

  constructor(private script: ScriptService,
              private http: Http) {
    this.waitPromise = this.script.loadScript('townscript')
      .then((res) => console.log(res))
      .catch((err) => console.error('Phat Gaya Townscript'));
  }

  payment(prefillData: any) {
    this.waitPromise.then(() => {
      popupWithAutoFill(prefillData);
    });
  }
}
