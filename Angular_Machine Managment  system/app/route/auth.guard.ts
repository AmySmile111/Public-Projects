import { Injectable }             from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    // Not using but worth knowing about
    //next:  ActivatedRouteSnapshot,
    //state: RouterStateSnapshot
  ) {
    if (this.authService.isLoggedIn  && this.authService.firouter) {
      return true; //if it returns true, the navigation process continues
         
}
 if (this.authService.isLoggedIn  && !this.authService.addrouter && !this.authService.updateM && !this.authService.firouter) {
      return true; //if it returns true, the navigation process continues
         
}

if (this.authService.isLoggedIn && this.authService.admin==true) {
      return true; //if it returns true, the navigation process continues
         
}

if (this.authService.isLoggedIn &&this.authService.admin==false) {
      return false; //if it returns true, the navigation process continues
         
}
    this.router.navigate(['/login']);
    return false;//if it returns false, the navigation process stops and the user stays put
  }
}


//In guard, we use authService so we should do one step--register this service and then we can use it
//you should remeber to register in main.ts.