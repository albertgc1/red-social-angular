import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComlikeService } from 'src/app/core/services/comlike.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  url: string
  users:any = []

  constructor(
    private likeService: ComlikeService,
    private modalRef: MatDialogRef<LikesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.url = environment.urlFiles
  }

  ngOnInit(): void {
    this.getLikes()
  }

  getLikes(){
    this.likeService.getLikes(this.data.id).subscribe(
      (res:any) => this.users = res.data
    )
  }

  closeModal(){
    this.modalRef.close()
  }

}
