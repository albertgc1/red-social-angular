import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  token: String


  constructor() {
    
  }

  intercept(req, next){
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    })
    return next.handle(tokenReq)
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
