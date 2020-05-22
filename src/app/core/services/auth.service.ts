import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  register(data){
    return this.http.post(`${environment.Url}/register`, data)
  }

  login(data){
    return this.http.post(`${environment.Url}/login`, data)
  }

  logout(){
    return this.http.post(`${environment.Url}/logout`, '')
  }

}
