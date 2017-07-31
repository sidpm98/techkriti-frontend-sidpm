import { Component, OnInit } from '@angular/core';
import { FAQS, FAQ } from '../../models/faq';

@Component({
  selector: 'app-tosc-faq',
  templateUrl: './tosc-faq.component.html',
  styleUrls: ['./tosc-faq.component.css']
})
export class ToscFaqComponent implements OnInit {

  faqs: FAQ[] = FAQS;
  selectedFaq: FAQ = this.faqs[0];

  constructor() { }

  ngOnInit() {
  }

  selectFaq(faq: FAQ) {
    this.selectedFaq = faq;
  }

}
