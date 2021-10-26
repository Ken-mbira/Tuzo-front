import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account-service/account.service';
import { Project } from '../project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects:Project[] = []
  projectHolder:any;
  cloudinaryUrl:string = environment.CLOUDINARY_URL

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getProjects(1).subscribe(data => {
      this.projectHolder = data;
      for (let index = 0; index < this.projectHolder['projects'].length; index++) {
        let project = new Project(this.projectHolder['projects'][index]['owner'],this.projectHolder['projects'][index]['name'],new Date(this.projectHolder['projects'][index]['date_added']),new Date(this.projectHolder['projects'][index]['date_created']),this.projectHolder['projects'][index]['description'],this.projectHolder['projects'][index]['repo_link'],this.projectHolder['projects'][index]['live_link'],this.projectHolder['projects'][index]['image'])
        this.projects.push(project);
      }
    })
  }

}
