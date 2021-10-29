import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new User("","","","")
  private userInstance = new BehaviorSubject<User>(this.user)

  currentUser = this.userInstance.asObservable();

  newUser(user:User){
    this.userInstance.next(user)
  }

  isAuthenticated:boolean = true
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated)

  currentStatus = this.authStatus.asObservable();

  authentication(wildCard:boolean){
    this.authStatus.next(wildCard)
  }

  constructor() { }
}
