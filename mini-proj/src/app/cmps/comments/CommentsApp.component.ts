import { Component, Input, OnInit, Output } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-CommentsApp',
  templateUrl: './CommentsApp.component.html',
  styleUrls: ['./CommentsApp.component.scss'],
})
export class CommentsAppComponent implements OnInit {
  constructor(
    private commentService: CommentService,
    private UserService: UserService
  ) {}
  comments: any;
  formOpen: false;
  ngOnInit(): void {
    this.comments = this.commentService.query();
    console.log(this.commentService.query());
    console.log(this.getUserName(1));
  }

  getUserName(id: number) {
    return this.UserService.getById(id)[0].displayName;
  }

  onRemovecomment(commentId: string) {
    this.commentService.remove(commentId);
  }

  onAddComment() {
    this.formOpen=!true
  }

  onSubmit(){
    console.log('added');
    
  }
}
