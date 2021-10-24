import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  registerUser(user:any){
    return this.http.post(environment.TUZO_BASE_URL + "account/register",user)
  }

  constructor(private http:HttpClient) { }
}
