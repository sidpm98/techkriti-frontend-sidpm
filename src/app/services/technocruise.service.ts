import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TechnocruiseService {
  about: Observable<string>;
  constructor() {
    this.about = Observable.of(
      'about paragraph'
    );
  }
}
