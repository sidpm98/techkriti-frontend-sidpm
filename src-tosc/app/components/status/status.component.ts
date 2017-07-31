import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MdDialog } from '@angular/material';

import { SuccessfullDialogComponent } from '../../components/successfull-dialog/successfull-dialog.component';

import { RegistrationFormService } from '../../services/registration-form-service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  message: string;
  constructor(private route: ActivatedRoute,
              private payService: PaymentService,
              private dialog: MdDialog,
              private router: Router,
              private regService: RegistrationFormService) { }

  ngOnInit() {
    this.checkPaymentStatus();
  }

  checkPaymentStatus() {
    const params = this.route.snapshot.queryParams;
    let content = {};
    const prefillData = {
      cq1: params['cq1'],
      emailid: params['emailid'],
      name: params['name']
    };
    this.regService.checkStatus(prefillData.cq1)
      .then((status) => {
        if (status) {
          content = {
            header: 'Payment has already been made',
            body: 'Greetings <br> Team TOSC',
            prefillData: false,
            button: {
              value: 'VISIT TOSC'
            }
          };
        } else {
          content = {
            header: 'You have registered Succesfully',
            body: `<span>Note</span>: Last date for payment is <span>10 October</span>`,
            prefillData: prefillData,
            button: {
              value: 'PAY LATER'
            }
          };
        }
        const dialogRef = this.dialog.open(SuccessfullDialogComponent, {
          disableClose: true,
          data: {
            data: content,
          }
        });
        dialogRef.afterClosed().subscribe(() => this.router.navigate(['']));
      })
      .catch(err => this.message = err.json().message);
  }

}
