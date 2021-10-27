import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';

import { Project } from '../project';
import { ProjectService } from '../account-service/project.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = new Project(0,"","",new Date(),new Date(),"","","","",[])
  cloudinaryLink = environment.CLOUDINARY_URL

  projectHolder:any;

  index:number;

  constructor(private accountService:AccountService,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.currentIndex.subscribe(response => this.index = response)
    this.accountService.singleProject(this.index).subscribe(response => {
      this.projectHolder = response
      console.log(this.projectHolder['response'])

      this.project.index = this.projectHolder['response']['id']
      this.project.name = this.projectHolder['response']['name']
      this.project.owner = this.projectHolder['response']['owner']['username']
      this.project.dateAdded = this.projectHolder['response']['date_added']
      this.project.dateCreated = this.projectHolder['response']['date_created']
      this.project.description = this.projectHolder['response']['description']
      this.project.repoLink = this.projectHolder['response']['repo_link']
      this.project.liveLink = this.projectHolder['response']['live_link']
      this.project.image = this.projectHolder['response']['image']
      this.project.votes = this.projectHolder['response']['votes']
      console.log(this.project)
    })
  }

}
