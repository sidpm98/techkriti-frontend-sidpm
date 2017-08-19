import { inject, TestBed } from '@angular/core/testing';

import { TechnocruiseService } from './technocruise.service';

describe('TechnocruiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnocruiseService]
    });
  });

  it('should be created', inject([TechnocruiseService], (service: TechnocruiseService) => {
    expect(service).toBeTruthy();
  }));
});
