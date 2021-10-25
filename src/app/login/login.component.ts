import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service'
import { AuthServiceService } from '../account-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  isAuthenticated:boolean = false;


  login(){
    const upload = new FormData()
    upload.append('username',this.email)
    upload.append('password',this.password)
    this.accountService.loginUser(upload).subscribe(user => {
      this.status.changeStatus(true)
    },error =>{
      this.status.changeStatus(false)
    })
  }
  constructor(private accountService : AccountService,private status : AuthServiceService) { }

  ngOnInit(): void {
    this.status.currentStatus.subscribe(status => this.isAuthenticated = status)
  }

}
