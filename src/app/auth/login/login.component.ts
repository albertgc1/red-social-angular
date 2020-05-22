import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/redux/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { setUser } from 'src/app/redux/actions/auth.actions';
import { showSnackBar } from 'src/app/redux/actions/snackBar.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  count$: Number
  numberSubs: Subscription
  data:any = {
    email: '',
    password: ''
  }
  loading: boolean

  constructor( private store:  Store<appState>, private authService:AuthService, private router: Router ) {
    this.loading = false
  }

  ngOnInit(): void {
  }

  
  login(){
    this.loading = true
    this.authService.login(this.data).subscribe(
      (res:any) => {
        this.loading = false
        this.store.dispatch(setUser({ user: res.user }))
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('token', res.token)
        this.router.navigate(['home'])
      },
      err => {
        console.log(err)
        this.loading = false
        this.store.dispatch(showSnackBar({ showData: {mjs: 'Credenciales incorrectas', action:'Error'} }))
      }
    )
  }

  loginFacebook(){
    this.store.dispatch(showSnackBar({ showData: {mjs: 'Aun no dispnible', action:'xD'} }))
  }
  loginGoogle(){
    this.store.dispatch(showSnackBar({ showData: {mjs: 'Aun no dispnible Google', action:'xD'} }))
  }

}
