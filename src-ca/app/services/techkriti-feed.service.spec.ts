import { inject, TestBed } from '@angular/core/testing';

import { TechkritiFeedService } from './techkriti-feed.service';

describe('TechkritiFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechkritiFeedService]
    });
  });

  it('should be created', inject([TechkritiFeedService], (service: TechkritiFeedService) => {
    expect(service).toBeTruthy();
  }));
});
