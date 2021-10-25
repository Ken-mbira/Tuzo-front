import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: string = "";
  isAuthenticated:boolean = false;

  registerUser(user:any){
    let data:any;
    this.http.post(`${environment.TUZO_BASE_URL}account/register`,user).subscribe(response => {
      data = response
      this.token = data['token']
      this.isAuthenticated = true;
    },error=>{
      console.log(error)
    })
    return data
  }

  loginUser(user:any){
    let data: any;
    this.http.post(`${environment.TUZO_BASE_URL}account/login`,user).subscribe(response =>{
      data = response
      this.token = data['token']
      this.isAuthenticated = true;
      console.log(this.token)
    },error => {
      console.log(error)
    })
  }

  constructor(private http:HttpClient) { }
}
