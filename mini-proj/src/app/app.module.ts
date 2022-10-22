import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './cmps/comment/comment.component';
import { HeaderComponent } from './cmps/header/header.component';
import { UserComponent } from './cmps/user/user.component';
import { CommentsAppComponent } from './cmps/comments/CommentsApp.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsAppComponent,
    CommentComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
