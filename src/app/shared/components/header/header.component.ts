import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/redux/store';
import { User } from 'src/app/core/inferfaces/user';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user:User
  userSubcribe: Subscription
  url: string

  constructor( private store:  Store<appState> ) {
    this.url = environment.urlFiles
  }

  ngOnInit(): void {

  }
}
