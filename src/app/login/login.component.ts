import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service'
import { AuthServiceService } from '../account-service/auth-service.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  user = new User("","","","")
  userHolder:any;

  isAuthenticated:boolean = false;


  login(){
    const upload = new FormData()
    upload.append('email',this.email)
    upload.append('password',this.password)
    try {
    this.accountService.loginUser(upload)
    }
    finally{

    }
  }
  constructor(private accountService : AccountService,private status : AuthServiceService,private route:Router) { }

  ngOnInit(): void {
    this.status.currentUser.subscribe(user => this.user = user)
    this.isAuthenticated = this.status.isAuthenticated();
  }

}
