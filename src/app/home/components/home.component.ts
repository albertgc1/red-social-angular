import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posting: boolean
  post:any = {}
  photo:string
  url:string
  posts:any = []

  constructor(private postService:PostService) {
    this.posting = false
    this.url = environment.urlFiles
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){  
    this.postService.getPosts().subscribe(
      (res:any) => {
        console.log(res )
        this.posts = res.data
      }
    )
  }

  onScroll(){
    console.log('escrolling')
  }

  storePhoto(event){
    let data = new FormData()
    let file = event.target.files[0]
    data.append('photo', file)
    this.postService.storePostPhoto(data).subscribe(
      (res:any) => {
        this.photo = res.photo
      }
    )
  }

  storePost(){
    this.posting = false
    this.post.photo = this.photo
    this.postService.storePost(this.post).subscribe(
      () => {
        this.posting = false
        this.getPosts()
        this.post = {}
      }
    )
  }

  create(){
    this.posting = true
  }
  cancel(){
    this.posting = false
  }

}
