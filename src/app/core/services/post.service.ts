import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  storePostPhoto(data){
    return this.http.post(`${environment.Url}/post/photo`, data)
  }

  storePost(data){
    return this.http.post(`${environment.Url}/posts`, data)
  }

  getPosts(){
    return this.http.get(`${environment.Url}/posts`)
  }

  getPostsUsers(id){
    return this.http.get(`${environment.Url}/post/by-user/${id}`)
  }
}
