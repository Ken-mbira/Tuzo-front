import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: string = "";
  isAuthenticated:boolean = false;
  headers= new HttpHeaders()
  .set('Authorization', this.token);

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
    return this.http.post(`${environment.TUZO_BASE_URL}account/login`,user)
  }

  getProjects(){
    return this.http.get(`${environment.TUZO_BASE_URL}project/`)
  }

  singleProject(index:number){
    return this.http.get(`${environment.TUZO_BASE_URL}project/${index}`)
  }

  createProject(project:any){
    return this.http.post(`${environment.TUZO_BASE_URL}project/`,project,{ 'headers': this.headers })
  }

  constructor(private http:HttpClient) { }
}
