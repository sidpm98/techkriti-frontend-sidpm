import { TestBed, async, inject } from '@angular/core/testing';

import { ToscAuthGuard } from './tosc-auth.guard';

describe('ToscAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToscAuthGuard]
    });
  });

  it('should ...', inject([ToscAuthGuard], (guard: ToscAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
