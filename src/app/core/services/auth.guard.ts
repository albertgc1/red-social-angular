import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.getStatus()){
      return true
    }else{
      this.router.navigate(['login'])
      return false
    }
    
  }

  getStatus(){
    let token = localStorage.getItem('token')
    let user = localStorage.getItem('user')

    if(token && user) return true
    else return false
  }
  
}
