import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Store } from '@ngrx/store';
import { appState } from '../redux/store';
import { Router } from '@angular/router';
import { unSetUser } from '../redux/actions/auth.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authService: AuthService, private store:Store<appState>, private route: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe(
      () => {
        localStorage.clear()
        this.store.dispatch(unSetUser())
        this.route.navigate(['login'])
      }
    )
  }

}
