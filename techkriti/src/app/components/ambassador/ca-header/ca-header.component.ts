import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ca-header',
  templateUrl: './ca-header.component.html',
  styleUrls: ['./ca-header.component.css']
})
export class CaHeaderComponent implements OnInit {

  @Input() private header: string = '';

  constructor() { }

  ngOnInit() {
  }

}
