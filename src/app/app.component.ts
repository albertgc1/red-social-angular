import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from './redux/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './core/inferfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user:User

  constructor( private store:Store<appState>, private snackBar:MatSnackBar ){

  }

  ngOnInit(){
    this.userAuthCheck()
    this.snackBarCheck()
  }

  userAuthCheck(){
    this.store.select('user').subscribe(user => {
      this.user = user.user
    })
  }

  snackBarCheck(){
    this.store.select('snackBar').subscribe(
      (data:any) => {
        if(data.showData.mjs){
          this.openSnackBar(data.showData.mjs, data.showData.action)
        }
      }
    )
  }

  openSnackBar(mjs, action){
    this.snackBar.open(mjs, action, {
      duration: 2000
    })
  }

}
