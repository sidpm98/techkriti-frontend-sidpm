import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-successfull-dialog',
  templateUrl: './successfull-dialog.component.html',
  styleUrls: ['./successfull-dialog.component.css']
})
export class SuccessfullDialogComponent implements OnInit {

  public content: any;

  constructor(public dialogRef: MdDialogRef<SuccessfullDialogComponent>,
              private payService: PaymentService,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.content = this.data.data;
  }

  ngOnInit() {
  }

  makePayment() {
    const payPrefill = this.content.prefillData;
    payPrefill['eventcode'] = 'tosc-17-112141';
    this.payService.payment(payPrefill);
  }

}
