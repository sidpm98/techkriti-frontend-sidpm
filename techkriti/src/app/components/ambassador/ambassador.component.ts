import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { content } from './assets/content';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.css'],
})
export class AmbassadorComponent implements OnInit {
  private content = content;

  private tabLabels: string[] = ['About Us',
                                 'Why CA?',
                                 'Responsibilities',
                                 'Incentives',
                                 'Application Process',
                                 'Contact Us'];

  private tabs: {} = {
    'About Us' : {'state': true},
    'Why CA?': {'state': false},
    'Responsibilities': {'state': false},
    'Incentives': {'state': false},
    'Application Process': {'state': false},
    'Contact Us': {'state': false}
  };

  private currTab: string = 'About Us';

  constructor() { }

  ngOnInit() {
    console.log(this.content);
    this.tabs[this.currTab].state = true;
  }

  switchTab(tab: string) {
    console.log(tab);
    if (this.currTab !== tab) {
      this.tabs[this.currTab].state = false;
      this.tabs[tab].state = true;
      this.currTab = tab;
    }
  }

}
