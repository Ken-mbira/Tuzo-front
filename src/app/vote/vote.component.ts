import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }
  @Input() project = new Project(0,"","",new Date(),new Date(),"","","","",[])

  ngOnInit(): void {
  }

}
