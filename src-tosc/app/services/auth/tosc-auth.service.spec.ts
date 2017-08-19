import { inject, TestBed } from '@angular/core/testing';

import { ToscAuthService } from './tosc-auth.service';

describe('ToscAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToscAuthService]
    });
  });

  it('should be created', inject([ToscAuthService], (service: ToscAuthService) => {
    expect(service).toBeTruthy();
  }));
});
