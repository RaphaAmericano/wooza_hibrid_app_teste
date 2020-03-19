import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanDeactivate, UrlSegment, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { Route } from '@angular/compiler/src/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.auth.isAuth().subscribe(
    //   (res) => { 
    //     is_auth = res;
    //     console.log(res)
    //     if(is_auth) {
    //       this.router.navigate(['/']);
    //     }
    //     return is_auth;     
    //   }
    // );

    return this.auth.isAuth().pipe(
     map(e => {
       if(e){
         return true;
       }
     }),
     catchError(() => {
      this.router.navigate(['/']);
      return of(false);
     }) 
    ) 

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    return true;
      
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return true;
  }
  
  
  
}
