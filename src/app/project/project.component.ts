import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';

import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = new Project(0,"","",new Date(),new Date(),"","","","",[])

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.singleProject(this.project.index).subscribe(response => {
      console.log(response)
    })
  }

}
