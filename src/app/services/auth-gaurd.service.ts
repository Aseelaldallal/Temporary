import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MicrosoftService } from './microsoft.service';

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate {
  constructor(
    private microsoftService: MicrosoftService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.microsoftService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/splash']);
    }
  }
}
