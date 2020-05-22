import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComlikeService {

  constructor( private http: HttpClient ) { }

  getComments(id){
    return this.http.get(`${environment.Url}/comments/post/${id}`)
  }

  storeComment(data){
    return this.http.post(`${environment.Url}/comments`, data)
  }

  updateComment(id, data){
    return this.http.put(`${environment.Url}/comments/${id}`, data)
  }

  deleteComment(id){
    return this.http.delete(`${environment.Url}/comments/${id}`)
  }

  getLikes(id){
    return this.http.get(`${environment.Url}/likes/post/${id}`)
  }

  storeLike(data){
    return this.http.post(`${environment.Url}/likes`, data)
  }

  deleteLike(id){
    return this.http.delete(`${environment.Url}/likes/${id}`)
  }

}
