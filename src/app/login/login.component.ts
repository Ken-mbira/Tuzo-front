import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service'
import { AuthServiceService } from '../account-service/auth-service.service';
import { Router } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  user = new User("","","","",false,"")
  userHolder:any;

  isAuthenticated:boolean = false;


  login(){
    const upload = new FormData()
    upload.append('email',this.email)
    upload.append('password',this.password)
    this.accountService.loginUser(upload).subscribe(user => {
      this.userHolder = user
      this.user.username = this.userHolder['account']['username']
      this.user.email = this.userHolder['account']['email']
      this.user.profile_pic = this.userHolder['account']['profile_pic']
      this.user.isAuthenticated = true
      this.user.authToken = this.userHolder['token']
      this.status.newUser(this.user)
      this.route.navigate(['dashboard'])
    },error =>{
      console.log(error.message)
      this.status.newUser(this.user)
    })
  }
  constructor(private accountService : AccountService,private status : AuthServiceService,private route:Router) { }

  ngOnInit(): void {
    this.status.currentUser.subscribe(user => this.user = user)
  }

}
