import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: string = "";

  registerUser(user:any){
    let data:any;
    this.http.post(`${environment.TUZO_BASE_URL}account/register`,user).subscribe(response => {
      data = response
      this.token = data['token']
      console.log(this.token)
    })
    return data
  }

  constructor(private http:HttpClient) { }
}
