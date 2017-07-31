import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { content } from './assets/content';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.css'],
})
export class AmbassadorComponent implements OnInit {
  boo = true;
  hamOpen = true; // hamberger-icon boolean
  tabVisibility = false;

  tabLabels: string[] = ['About Us',
                                 'Why CA?',
                                 'Responsibilities',
                                 'Incentives',
                                 'Application Process',
                                 'Contact Us'];

  tabs: {} = {
    'About Us' : {'state': true},
    'Why CA?': {'state': false},
    'Responsibilities': {'state': false},
    'Incentives': {'state': false},
    'Application Process': {'state': false},
    'Contact Us': {'state': false}
  };

  currTab: string = 'About Us';

  constructor() { }

  toggleTabVisibility() {
    if (window.innerWidth <= 412) {
      this.tabVisibility = !this.tabVisibility;
      this.hamOpen = !this.hamOpen;
    }
  }

  ngOnInit() {
    // Set up tab visibility based on CSS (which gets data from @media)
    if (window.innerWidth > 412) {
      this.tabVisibility = true;
    }
    this.tabs[this.currTab].state = true;
  }

  switchTab(tab: string) {
    if (this.currTab !== tab) {
      this.tabs[this.currTab].state = false;
      this.tabs[tab].state = true;
      this.currTab = tab;
    }
  }

}
