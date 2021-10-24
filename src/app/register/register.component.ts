import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';

import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User("","","","","")

  register(){
    this.accountService.registerUser(this.user).subscribe(user => {
      console.log(user)
    })
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
