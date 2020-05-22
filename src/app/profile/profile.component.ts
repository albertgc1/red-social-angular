import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AvatarComponent } from './avatar/avatar.component';
import { Store } from '@ngrx/store';
import { appState } from '../redux/store';
import { Subscription } from 'rxjs';
import { User } from '../core/inferfaces/user';
import { environment } from 'src/environments/environment';
import { PostService } from '../core/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: User
  authSubs: Subscription
  url: string
  posts:any = []

  constructor(public modal: MatDialog, private store: Store<appState>, private postService: PostService) {
    this.url = environment.urlFiles
  }

  ngOnInit(): void {
    this.authSubs = this.store.select('user').subscribe(
      (user:any) => {
        this.user = user.user
        this.getMyPosts(this.user.id)
      }
    )
  }

  getMyPosts(id){
    this.postService.getPostsUsers(id).subscribe(
      (res:any) => this.posts = res.data
    )
  }

  openModal(){
    this.modal.open(AvatarComponent, {
      width: '300px',
      height: '300px',
      data: { id: this.user.id }
    })
  }

  ngOnDestroy(){
    this.authSubs.unsubscribe()
  }

}
