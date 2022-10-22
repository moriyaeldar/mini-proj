import { Injectable } from '@angular/core';
import users from '../../assets/users.json';
import { storageService } from './async-storage.service';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter,map, distinctUntilChanged, throwIfEmpty } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
  private KEY = 'USERS';

  constructor() {}

  private Users = users;

 async query() {
    let usersFromData = this.Users;
    let usersFromStorage =await storageService.query(this.KEY, 0);
    if(!usersFromStorage||!usersFromStorage.length)storageService.save(this.KEY,usersFromData)
  const users=!usersFromStorage||!usersFromStorage.length?usersFromData:usersFromStorage
    return users;
  }

  logout() {
    sessionStorage.removeItem(this.STORAGE_KEY_LOGGEDIN_USER);
  }
 getById(id:number){
 const userToReturn=users.filter(user=>user.id===id)
 return userToReturn
}
  _saveLocalUser(user: any) {
    sessionStorage.setItem(
      this.STORAGE_KEY_LOGGEDIN_USER,
      JSON.stringify(user)
    );
  }

  getLoggedinUser() {
    return JSON.parse(
      sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) || 'null'
    );
  }
}
