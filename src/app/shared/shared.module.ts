import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './components/header/header.component'
import { FooterNavComponent } from './components/footer-nav/footer-nav.component'
import { MaterialModule } from '../material/material.module';
import { LikesComponent } from './components/likes/likes.component'
import { PostsComponent } from './components/posts/posts.component'
import { CommentsComponent } from './components/comments/comments.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterNavComponent,
    LikesComponent,
    PostsComponent,
    CommentsComponent
  ],
  exports: [
    HeaderComponent,
    FooterNavComponent,
    LikesComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
