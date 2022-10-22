import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject,of } from 'rxjs';
import { storageService } from './async-storage.service';
import comments from '../../assets/comments.json'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
  private KEY = 'COMMENTS';

  constructor() {}
  private _commentsDb:any

  private _comments$ = new BehaviorSubject<any[]>([])
  public comments$ = this._comments$.asObservable()
  private Comments = comments;
 

async query() {
    let commentsFromData = this.Comments;
    let commentsFromStorage =await storageService.query(this.KEY, 0);
    if(!commentsFromStorage||!commentsFromStorage.length){
      storageService.save(this.KEY,commentsFromData) 
      this._commentsDb=commentsFromData
    }
  const comments=!commentsFromStorage||!commentsFromStorage.length?commentsFromData:commentsFromStorage
    return comments;
  }

  async remove(commentId: string) {
await storageService.remove(this.KEY,commentId)
  }
  async add(comment:object) {
await storageService.post(this.KEY,comment)
this._comments$.next(this._commentsDb)
return of(comment)
  }
  
}
