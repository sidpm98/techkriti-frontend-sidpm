import { Injectable } from '@angular/core';

import { FacebookService } from 'ngx-facebook';

@Injectable()
export class TechkritiFeedService {

  constructor(private fb: FacebookService) { }

  getAllPosts(): Promise<any> {
    return this.fb.api('techkriti.iitk/posts?fields=message,full_picture,link,permalink_url&limit=100', 'get');
  }

}
