import { TestBed } from '@angular/core/testing';

import { FurnitureguardGuard } from './furnitureguard.guard';

describe('FurnitureguardGuard', () => {
  let guard: FurnitureguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FurnitureguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
