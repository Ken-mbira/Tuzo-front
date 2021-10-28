import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { AccountService } from '../account-service/account.service';
import { User } from '../user';
import { AuthServiceService } from '../account-service/auth-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project = new Project(0,"","",new Date(),new Date(),"","","","",[])
  user = new User("","","","")

  onImageChange(event: any){
    this.project.image = event.target.files[0]
  }

  newProject(){
    const projectData = new FormData()
    projectData.append('name',this.project.name)
    projectData.append('date_created','2020-01-01')
    projectData.append('description',this.project.description)
    projectData.append('repo_link',this.project.repoLink)
    projectData.append('live_link',this.project.liveLink)
    projectData.append('image',this.project.image,this.project.image.name)
    this.accountService.createProject(projectData).subscribe(response => {
      console.log(response)
    },error =>{
      console.log(error)
    })
  }

  constructor(private accountService:AccountService,private status:AuthServiceService) { }

  ngOnInit(): void {
    this.status.currentUser.subscribe(user => this.user = user)

  }

}
