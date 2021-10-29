import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardComponent } from '../dashboard/dashboard.component';


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
      this.snackBar.open("The account was created successfully!","Welcome",{duration:3000})
    },error=>{
      this.snackBar.open("The There was a problem creating your account!","Try again",{duration:3000})
    })
    return data
  }

  loginUser(user:any){
    this.http.post(`${environment.TUZO_BASE_URL}account/login`,user).subscribe(response => {
      sessionStorage.setItem('token',response['token'])
      this.route.navigate(['/dashboard'])
      this.snackBar.open("Welcome back!","Thank you",{duration:3000})
    },error => {
      this.snackBar.open("The account credentials were wrong!","Try again",{duration:3000})
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

  constructor(private http:HttpClient,private route:Router,private snackBar:MatSnackBar) { }
}
