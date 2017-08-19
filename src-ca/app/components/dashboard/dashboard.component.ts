import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { TechkritiFeedService } from '../../services/techkriti-feed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public posts: any;

  constructor(private feedService: TechkritiFeedService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.techFeed();
  }

  techFeed() {
    this.feedService.getAllPosts()
      .then((res) => {
        this.posts = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

}
