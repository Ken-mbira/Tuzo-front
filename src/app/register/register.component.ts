import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';

import { User } from '../user';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User("","","","","")
  userResponse:any;

  register(){
    this.accountService.registerUser(this.user)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
