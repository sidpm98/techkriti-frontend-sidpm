// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MdDialogRef, MdSnackBar } from '@angular/material';

// import { ToscAuthService } from '../../../services/auth/tosc-auth.service';

// @Component({
//   selector: 'app-tosc-login',
//   templateUrl: './tosc-login.component.html',
//   styleUrls: ['./tosc-login.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class ToscLoginComponent implements OnInit {

//   private username: string;
//   private password: string;
//   private loginFlag: boolean = false;
//   private loaderFlag: boolean = false;
//   private forgot: boolean = false;

//   constructor(public dialogRef: MdDialogRef<ToscLoginComponent>,
//               public snackBar: MdSnackBar,
//               private authService: ToscAuthService) { }

//   ngOnInit() {
//   }

//   loginIn() {
//     this.loginFlag = true;
//     this.loaderFlag = true;
//     this.authService.signIn(this.username, this.password)
//       .then((user) => {
//         this.dialogRef.close();
//         console.log(user);
//         this.username = '';
//         this.password = '';
//       })
//       .catch((err) => {
//         this.loginFlag = false;
//         this.loaderFlag = false;
//         this.snackBar.open('ERROR', err, {
//           duration: 3000
//         });
//         console.error(err);
//       });
//   }

//   showForgot() {
//     this.forgot = true;
//   }

//   showSignIn(state: boolean) {
//     this.forgot = state;
//   }

// }
