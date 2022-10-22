import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CommentService } from 'src/app/services/comment.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comments$: Observable<any>
  subscription: Subscription
  @Input() comments:any;
  @Input() id:any;
  constructor(private UserService:UserService,private commentService:CommentService) {}
  comment: any;
  commentId:any
  ngOnInit(): void {
    this.comment = this.comments;
    this.comments$ = this.commentService.comments$
    this.commentId=this.id
  }

  getUserName(id:number){
    return this.UserService.getById(id)[0].displayName
    }

    onRemovecomment(commentId:string) {
      this.commentService.remove(commentId)
  }
}
