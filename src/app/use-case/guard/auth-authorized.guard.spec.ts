import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authAuthorizedGuard } from './auth-authorized.guard';

describe('authAuthorizedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authAuthorizedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
