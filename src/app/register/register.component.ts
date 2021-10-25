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

  onImageChanged(event: any){
    this.user.profile_pic = event.target.files[0]
  }

  register(){
    const upload = new FormData()
    upload.append('email',this.user.email)
    upload.append('username',this.user.username)
    upload.append('password',this.user.password)
    upload.append('password2',this.user.password2)
    upload.append('profile_pic',this.user.profile_pic,this.user.profile_pic.name)
    this.accountService.registerUser(upload)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
