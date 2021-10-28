import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { environment } from './../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: string = "";
  isAuthenticated:boolean = false;

  registerUser(user:any){
    let data:any;
    this.http.post(`${environment.TUZO_BASE_URL}account/register`,user).subscribe(response => {
      this.route.navigate(['/'])
    },error=>{
      console.log(error)
    })
    return data
  }

  loginUser(user:any){
    this.http.post(`${environment.TUZO_BASE_URL}account/login`,user).subscribe(response => {
      this.route.navigate(['/dashboard'])
      sessionStorage.setItem('token',response['token'])
    },error => {
      console.log(error)
    })
  }

  logoutUser(){
    sessionStorage.removeItem('token')
  }

  getProjects(){
    return this.http.get(`${environment.TUZO_BASE_URL}project/`)
  }

  singleProject(index:number){
    return this.http.get(`${environment.TUZO_BASE_URL}project/${index}`)
  }

  createProject(project:any){

    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.post(`${environment.TUZO_BASE_URL}project/`,project,{'headers':headers})
  }

  newVote(vote:any,pk){

    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.post(`${environment.TUZO_BASE_URL}project/vote/${pk}`,vote,{'headers':headers}).subscribe(response => {
      console.log(response)
    },error => {
      console.log(error)
    })
  }

  constructor(private http:HttpClient,private route:Router) { }
}
