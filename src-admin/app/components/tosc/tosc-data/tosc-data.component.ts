import {DataSource} from '@angular/cdk/collections';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MdPaginator, MdSnackBar} from '@angular/material';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ToscDataService} from '../../../services/tosc.service';

@Component({
  selector: 'app-tosc-data',
  templateUrl: './tosc-data.component.html',
  styleUrls: ['./tosc-data.component.css']
})

export class ToscDataComponent implements OnInit {
  displayedColumns = ['name', 'class', 'school', 'city', 'payment', 'contact', 'delete'];
  exampleDatabase: ExampleDatabase;
  dataSource: ExampleDataSource | null;
  class = '';
  city = '';
  cities = [];
  classes = ['09', '10', '11', '12'];

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('filter') filter: ElementRef;

  constructor(private toscService: ToscDataService,
              public snackbar: MdSnackBar) {
  }

  ngOnInit() {
    this.build();
    this.toscService.getCity().then((res) => this.cities = res);
  }

  build() {
    this.exampleDatabase = new ExampleDatabase(this.toscService);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }

  getParams(): string {
    if (this.class === '' && this.city === '') {
      return '';
    }
    let params = '?';
    if (this.class !== '') {
      params += `class=${ this.class }`;
    }
    if (this.city !== null && this.class !== null) {
      params += '&';
    }
    if (this.city !== '') {
      params += `city=${ this.city }`;
    }    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    return params;
  }

  deleteStudent(id: string) {
    this.toscService.delete(id).subscribe((res) => {
      this.snackbar.open(res, '', {
        duration: 2000
      });
      const currentData = this.exampleDatabase.data;
      const index = currentData.findIndex(x => x._id === id);
      currentData.splice(index, 1);
      this.exampleDatabase.dataChange.next(currentData);
  });
}
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  get data(): any {
    return this.dataChange.value;
  }

  constructor(private toscService: ToscDataService) {
    this.toscService.getApplications().subscribe((users) => {
      const toscdata = [];
      for (let i = 0; i < users.length; i++) {
        toscdata.push(users[i]);
      }
      this.dataChange.next(toscdata);
    });
  }
}

class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._filterChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;

      return data.filter((item: any) => {
        const searchStr = (item.name + item.city + item.class + item.paid).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      }).splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
