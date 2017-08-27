import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {cruise} from '../config/cruise';
import {WorkshopInterface} from '../models/workshop.interface';

@Injectable()
export class TechnocruiseService {

  about: Observable<string>;
  cities: Observable<Array<any>>;
  tabs: Observable<Array<any>>;
  workshops: Observable<Map<string, WorkshopInterface>>;
  cityWorkshops: Observable<Map<string, Array<WorkshopInterface>>>;
  WorkshopName: Observable<Array<{name: string, pic: string}>>;
  contacts: any;

  constructor() {
    this.about = Observable.of(cruise.about);
    this.WorkshopName = Observable.of(cruise.workshopName);
    this.cities = Observable.of(cruise.cities);
    this.tabs = Observable.of(cruise.tabs);
    this.workshops = Observable.of(new Map(cruise.workshops));
    this.contacts = Observable.of(cruise.contacts);
    this.cityWorkshops = Observable.of(new Map(cruise.cityWorkshop));
  }

  getAbout() {
    return this.about;
  }

  getCities() {
    return this.cities;
  }

  getWorkshopTabs() {
    return this.tabs;
  }

  getWorkshop(name: string): Observable<any> {
    return this.workshops.map(city => city.get(name));
  }

  getCityWorkshops(city: string): Observable<any> {
    return this.cityWorkshops.map(workshop => workshop.get(city));
  }

  getWorkshopName() {
    return this.WorkshopName;
  }

  getContacts() {
    return this.contacts;
  }
}
