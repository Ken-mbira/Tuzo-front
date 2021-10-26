import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';

import { Project } from '../project';
import { ProjectService } from '../account-service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = new Project(0,"","",new Date(),new Date(),"","","","",[])

  index:number;

  constructor(private accountService:AccountService,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.currentIndex.subscribe(response => this.index = response)
    this.accountService.singleProject(this.index).subscribe(response => {
      console.log(response)
    })
  }

}
