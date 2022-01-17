import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  authorized = false;
  roles: any;
  
  constructor(private _authSrvc: AuthService, private _router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.authorized = false;
    // debugger;
    if (this._authSrvc.isLoggedIn()) {
      const currentUserRole = this._authSrvc.getRole();
      
      if (route.data.roles) {
        for (let i = 0; i < route.data.roles.length; i++) {
          if (route.data.roles[i] === currentUserRole) {
            this.authorized = true;
            break;
          }
        }
        // console.log(this.authorized);
        if (this.authorized === false) {
          // console.log('unauthorized from authGuard!');
          this._router.navigate(['/unauthorized']);
        }
        return this.authorized;
      } else {
        return true;
      }
    } else {
      this._router.navigate(['/unauthorized']);
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
