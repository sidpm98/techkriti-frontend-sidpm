import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public files: any[] = [];
  public resFlag: boolean = false;

  constructor(private http: Http,
              private resService: ResourcesService) { }

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.resService.getResources()
      .then((res) => {
        this.resFlag = true;
        const href = 'https://techkriti.org/resource/tosc';
        for (const file in res.files) {
          if (res.files.hasOwnProperty(file)) {
            const filename = res.files[file].split('.');
            const details = {
              name: filename[0],
              href: `${ href }/${ res.files[file] }`
            };
            this.files.push(details);
          }
        }
      });
  }
}
