import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { content } from './assets/content';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms 10ms ease-out')
      ]),
      transition('* => void', [
        animate('300ms 10ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AmbassadorComponent implements OnInit {
  private boo = true;
  private hamOpen = true; // hamberger-icon boolean
  private tabVisibility = false;
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

  toggleTabVisibility() {
    this.tabVisibility = !this.tabVisibility;
    this.hamOpen = !this.hamOpen;
  }

  show() {
    setTimeout(() => this.boo=true, 2000);
    setTimeout(() => this.boo=false, 4000);
  }
  ngOnInit() {
    // Set up tab visibility based on CSS (which gets data from @media)
    if (window.innerWidth > 412) {
      this.tabVisibility = true;
    }
    // this.show();
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
