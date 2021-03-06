import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account-service/account.service';
import { Project } from '../project';
import { environment } from 'src/environments/environment';
import { ProjectService } from '../account-service/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects:Project[] = []
  projectHolder:any;
  cloudinaryUrl:string = environment.CLOUDINARY_URL

  index: number;

  viewProject(index){
    this.projectService.newIndex(index)
    sessionStorage.setItem('index',index)
    this.route.navigate(['/project']);
  }

  constructor(private accountService:AccountService,private route:Router,private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.currentIndex.subscribe(response => this.index = response)
    this.accountService.getProjects().subscribe(data => {
      this.projectHolder = data;
      for (let index = 0; index < this.projectHolder['projects'].length; index++) {
        let project = new Project(this.projectHolder['projects'][index]['id'],this.projectHolder['projects'][index]['owner']['username'],this.projectHolder['projects'][index]['name'],new Date(this.projectHolder['projects'][index]['date_added']),new Date(this.projectHolder['projects'][index]['date_created']),this.projectHolder['projects'][index]['description'],this.projectHolder['projects'][index]['repo_link'],this.projectHolder['projects'][index]['live_link'],this.projectHolder['projects'][index]['image'],this.projectHolder['projects'][index]['votes'])
        this.projects.push(project);
      }
    })
  }

}
