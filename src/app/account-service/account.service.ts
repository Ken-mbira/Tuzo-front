import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: string = "";
  isAuthenticated:boolean = false;

  registerUser(user:any){
    let data:any;
    this.http.post(`${environment.TUZO_BASE_URL}account/register`,user).subscribe(response => {
      this.route.navigate([''])
      this.snackBar.open("The account was created successfully!","Welcome",{duration:3000})
    },error=>{
      this.snackBar.open("The There was a problem creating your account!","Try again",{duration:3000})
    })
    return data
  }

  loginUser(user:any){
    this.status.currentStatus.subscribe(status => this.isAuthenticated = status)
    this.http.post(`${environment.TUZO_BASE_URL}account/login`,user).subscribe(response => {
      sessionStorage.setItem('token',response['token'])
      this.route.navigate(['/dashboard'])
      this.snackBar.open("Welcome back!","Thank you",{duration:3000})
      this.status.authentication(true)
    },error => {
      this.snackBar.open("The account credentials were wrong!","Try again",{duration:3000})
    })
  }

  logoutUser(){
    sessionStorage.removeItem('token')
    this.snackBar.open("You were logged out!","See you later",{duration:3000})
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
    this.http.post(`${environment.TUZO_BASE_URL}project/`,project,{'headers':headers}).subscribe(response => {
      this.snackBar.open("Congratulations, your project was added successfully!","end",{duration:3000})
      this.route.navigate(['dashboard'])
    },error => {
      this.snackBar.open("There was a problem while creating your project!","Try again",{duration:3000})
    })
  }

  newVote(vote:any,pk){

    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.post(`${environment.TUZO_BASE_URL}project/vote/${pk}`,vote,{'headers':headers}).subscribe(response => {
      this.snackBar.open("Vote submission successful!","Thank you",{duration:3000})
    },error => {
      this.snackBar.open("There was a problem submitting your vote!","Try again",{duration:3000})
    })
  }

  constructor(private http:HttpClient,private route:Router,private snackBar:MatSnackBar,private status:AuthServiceService) { }
}
