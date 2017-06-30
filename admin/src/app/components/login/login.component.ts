import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string;
  public password: string;
  public error: any;
  constructor(private authService: AuthService,
              private router: Router) {
  }


  public submit() {
    this.username = this.username.trim();
    this.password = this.password.trim();
    this.authService.login(this.username,this.password)
    .then((res) =>  {
      this.router.navigate(['dashboard']);
    })
    .catch((res) => {
      this.error = res.statusText;
    })
  }

}
