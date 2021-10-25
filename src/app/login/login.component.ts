import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";


  login(){
    const upload = new FormData()
    upload.append('username',this.email)
    upload.append('password',this.password)
    this.accountService.loginUser(upload)
  }
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

}
