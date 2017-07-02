import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';

import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { ToscService } from '../../services/tosc.service';
import { RegistrationFormService } from '../../services/registration-form-service';

import { TOSC } from '../../config/tosc';

@Component({
  selector: 'app-tosc',
  templateUrl: './tosc.component.html',
  styleUrls: ['./tosc.component.css'],
})

export class ToscComponent implements OnInit {

  tosc = TOSC; // TOSC config.

  scroll: boolean = false;
  tabStrings: string[] = ['ABOUT',
                          'DETAILS',
                          'CONDUCTION',
                          'CITIES',
                          'PRIZES',
                          'TESTIMONIALS',
                          'FAQ',
                          'GALLERY',
                          'SPONSORS',
                          'CONTACTS'];

  hamOpen: boolean = false; // Mobile Ham Open
  cities: string[];
  selectedTab: string;

  constructor(private authService: ToscAuthService,
              private toscService: ToscService,
              private router: Router,
              private regService: RegistrationFormService,
              private dialog: MdDialog) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    if (window.pageYOffset > 30) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  ngOnInit() {
    this.regService.getCity()
      .then((cities) => {
        console.log(cities);
        this.cities = cities;
      });
  }

  goto(section: string) {
    this.router.navigate(['tosc'], { fragment: section});
    this.selectedTab = section;
    if (window.innerWidth <= 786) {
      this.toggle();
    }
  }

  toggle() {
    this.hamOpen = !this.hamOpen;
  }
}
