import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { LikesComponent } from 'src/app/shared/components/likes/likes.component';
import { ComlikeService } from 'src/app/core/services/comlike.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() post:any
  @Output() updateLike = new EventEmitter()
  url:string

  constructor( private modalComments: MatDialog, private modalLikes: MatDialog, private likeService: ComlikeService,
              private userService:UserService ) {
    this.url = environment.urlFiles
  }

  ngOnInit(): void {
  }

  showComments(id){
    this.modalComments.open(CommentsComponent, {
      maxWidth: '91vw',
      width: '100%',
      maxHeight: 'calc(100vh - 90px)',
      height : 'auto',
      data: { id: id }
    })
  }

  showLikes(id, likes){
    this.modalLikes.open(LikesComponent, {
      maxWidth: '91vw',
      width: '100%',
      maxHeight: 'calc(100vh - 90px)',
      height : 'auto',
      data: { id, likes }
    })
  }

  storeLike(id){
    let data = { post_id: id }
    this.likeService.storeLike(data).subscribe(
      (res:any) => {
        console.log(res)
        this.updateLike.emit()
        let notification = {
          id: Date.now(),
          name: res.user.name,
          avatar: res.user.avatar,
          like: true,
          comment: false
        }
        this.userService.setNotification(res.userPost, notification)
      }
    )
  }

  deleteLike(id){
    this.likeService.deleteLike(id).subscribe(
      () => {
        this.updateLike.emit()
      }
    )
  }

}
