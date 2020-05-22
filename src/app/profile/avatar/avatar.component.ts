import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { UserService } from 'src/app/core/services/user.service'
import { environment } from 'src/environments/environment'
import { Store } from '@ngrx/store'
import { appState } from 'src/app/redux/store'
import { setUser } from 'src/app/redux/actions/auth.actions'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  avatarFile: any
  avatar: string
  url:string

  constructor(public modalRef: MatDialogRef<AvatarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService,
              private store: Store<appState>
  ){
    this.avatar = null
    this.url = environment.urlFiles
  }

  ngOnInit(): void {
  }

  storeAvatar(event){
    let data = new FormData()
    let file = event.target.files[0]
    data.append('avatar', file)
    this.userService.storeAvatar(data).subscribe(
      (res:any) => this.avatar = res.avatar
    )
  }

  cancel(){
    this.modalRef.close()
  }

  save(){
    this.modalRef.close()
    let data = { avatar: this.avatar }
    this.userService.updateUser(data, this.data.id).subscribe(
      (res:any) => {
        this.store.dispatch(setUser({ user: res }))
        localStorage.setItem('user', JSON.stringify(res))
      }
    )
  }

}
