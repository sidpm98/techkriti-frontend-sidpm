import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router,
              private authService: AuthService) {}

  public campus() {
    this.router.navigate(['ca']);
  }
  public logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
