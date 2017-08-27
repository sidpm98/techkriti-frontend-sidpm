import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-technocruise',
  templateUrl: './technocruise.component.html',
  styleUrls: ['./technocruise.component.css']
})
export class TechnocruiseComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.fbLogin()
      .then(() => {
      console.log('Logged In Successfully');
      this.router.navigate(['technocruise/dashboard']);
      });
  }

  update() {
  }

}
