import { Component, HostListener, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { OtherTestComponent } from '../../components/other-test/other-test.component';
import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { RegistrationFormService } from '../../services/registration-form-service';
import { ToscService } from '../../services/tosc.service';

import { TOSC } from '../../config/tosc';

@Component({
  selector: 'app-tosc',
  templateUrl: './tosc.component.html',
  styleUrls: ['./tosc.component.css']
})

export class ToscComponent implements OnInit {

  tosc = TOSC; // TOSC config.

  scroll = false;
  navStrings: string[] = [
    'ABOUT',
    'DETAILS',
    'CONDUCTION',
    'PRIZES',
    'TESTIMONIALS',
    'FAQ',
    'RESOURCES',
    'SPONSORS',
    'CONTACTS'
  ];
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

  hamOpen = false; // Mobile Ham Open
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
        this.cities = cities;
      });
  }

  goto(section: string) {
    if (section === 'RESOURCES') {
      this.router.navigate(['resources']);
    } else {
      this.router.navigate([], { fragment: section});
      this.selectedTab = section;
      if (window.innerWidth <= 786) {
      this.toggle();
      }
    }
  }

  toggle() {
    this.hamOpen = !this.hamOpen;
  }

  openTest() {
    let height;
    if (window.innerWidth < 412) {
      height = '80vh';
    } else {
      height = '45vh';
    }
    this.dialog.open(OtherTestComponent, {
      data: {
        data: this.tosc.otherToppers
      },
      height,
      width: '80vw'
    });
  }
}
