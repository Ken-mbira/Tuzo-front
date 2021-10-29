import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account-service/account.service';
import { AuthServiceService } from '../account-service/auth-service.service';
import { Router } from '@angular/router'

import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = new User("","","","")
  isAuthenticated:boolean = false;

  logout(){
    const emptyUser = new User("","","","")
    this.status.newUser(emptyUser)
    this.status.authentication(false)
    this.accountService.logoutUser();
    this.ngOnInit();
  }

  constructor(private accountService:AccountService,private status:AuthServiceService,private route:Router) { }

  ngOnInit(): void {
    this.status.currentUser.subscribe(user => this.user = user)
    this.status.currentStatus.subscribe(status => this.isAuthenticated = status)
  }

}
