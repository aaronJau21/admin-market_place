import { CanActivateFn } from '@angular/router';

export const authAuthorizedGuard: CanActivateFn = (route, state) => {
  return true;
};
