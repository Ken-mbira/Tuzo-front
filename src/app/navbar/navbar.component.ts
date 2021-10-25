import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account-service/account.service';
import { AuthServiceService } from '../account-service/auth-service.service';

import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = new User("","","","",false)

  logout(){
    this.status.newUser(this.user)
  }

  constructor(private accountService:AccountService,private status:AuthServiceService) { }

  ngOnInit(): void {
    this.status.currentUser.subscribe(user => this.user = user)
  }

}
