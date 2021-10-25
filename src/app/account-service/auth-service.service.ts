import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authStatus = new BehaviorSubject<boolean>(false)

  currentStatus = this.authStatus.asObservable();

  changeStatus(newStatus:boolean){
    this.authStatus.next(newStatus)
  }

  constructor() { }
}
