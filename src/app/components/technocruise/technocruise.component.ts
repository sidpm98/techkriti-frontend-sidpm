import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

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
}
