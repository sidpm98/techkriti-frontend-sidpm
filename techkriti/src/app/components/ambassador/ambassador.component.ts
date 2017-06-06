import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { content } from './assets/content';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.css'],
})
export class AmbassadorComponent implements OnInit {
  private content = content;
  constructor() { }

  ngOnInit() {
    console.log(this.content);
  }

}
