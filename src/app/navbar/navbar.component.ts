import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated:boolean = this.accountService.isAuthenticated;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
