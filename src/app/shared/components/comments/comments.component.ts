import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComlikeService } from 'src/app/core/services/comlike.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment:any = {}
  comments: any = []
  url:string
  loading:boolean

  constructor(
    private modalRef: MatDialogRef<CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private commentService: ComlikeService
  ) {
    this.url = environment.urlFiles
    this.loading = false
  }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.loading = true
    this.commentService.getComments(this.data.id).subscribe(
      (res:any) => {
        this.loading = false
        this.comments = res.data
      }
    )
  }
  storeComment(){
    this.comment.post_id = this.data.id
    this.commentService.storeComment(this.comment).subscribe(
      () => {
        this.comment.comment = ""
        this.getComments()
      }
    )
  }

  deleteComment(id){
    this.commentService.deleteComment(id).subscribe(
      () => this.getComments()
    )
  }

  closeModal(){
    this.modalRef.close()
  }

}
