import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new User("","","","",false,"")
  private userInstance = new BehaviorSubject<User>(this.user)

  currentUser = this.userInstance.asObservable();

  newUser(user:User){
    this.userInstance.next(user)
  }

  isAuthenticated(){
    const token = sessionStorage.getItem('token')
    if(token){
      return true
    }
    else{
      return false
    }
  }

  constructor() { }
}
