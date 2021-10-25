import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account-service/account.service';
import { AuthServiceService } from '../account-service/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean = false;

  logout(){
    this.status.changeStatus(false)
  }

  constructor(private accountService:AccountService,private status:AuthServiceService) { }

  ngOnInit(): void {
    this.status.currentStatus.subscribe(status => this.isAuthenticated = status)
  }

}
