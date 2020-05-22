import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private Fire: AngularFireDatabase) { }

  storeAvatar(data){
    return this.http.post(`${environment.Url}/users`, data)
  }

  updateUser(data, id){
    return this.http.put(`${environment.Url}/users/${id}`, data)
  }

  setNotification(userId, notification){
    return this.Fire.object(`${userId}/${notification.id}/`).set(notification)
  }
  updateNotiState(id){
    this.Fire.object(`${id}/state`)
  }

  getNotifications(id){
    return this.Fire.list(`${id}`)
  }
}
