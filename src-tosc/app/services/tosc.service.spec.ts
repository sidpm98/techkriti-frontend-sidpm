import { inject, TestBed } from '@angular/core/testing';

import { ToscService } from './tosc.service';

describe('ToscService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToscService]
    });
  });

  it('should be created', inject([ToscService], (service: ToscService) => {
    expect(service).toBeTruthy();
  }));
});
