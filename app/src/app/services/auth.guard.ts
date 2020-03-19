import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth:AuthService, 
    private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let is_auth:boolean = true;
    
    this.auth.isAuth().subscribe(
      (res) => {
        is_auth = res;
        console.log(is_auth)
        if(is_auth){
          this.router.navigate(['home'])
        }
        return is_auth;
      }
    )
    return is_auth;
  }
  
}
