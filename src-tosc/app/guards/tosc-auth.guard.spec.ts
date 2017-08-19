import { async, inject, TestBed } from '@angular/core/testing';

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
