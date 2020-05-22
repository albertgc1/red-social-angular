import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/redux/store';
import { setUser } from 'src/app/redux/actions/auth.actions';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any= {}
  errors:any = []
  matcher:any
  loading: boolean

  constructor( private store: Store<appState>, private authService: AuthService, private router: Router ) {
    this.loading = false
  }

  ngOnInit(): void {
  }

  login(){
    this.loading = true
    this.authService.register(this.user).subscribe(
      (res:any) => {
        this.loading = false
        this.store.dispatch(setUser({ user: res.user }))
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('token', res.token)
        this.router.navigate(['home'])
      },
      e => {
        this.errors = e.error.errors
        console.log(this.errors)
        this.loading = false
      }
    )
  }

}
