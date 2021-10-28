import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { Vote } from '../vote';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  vote = new Vote(0,"",0,"",0,"","")
  @Input() project = new Project(0,"","",new Date(),new Date(),"","","","",[])

  postVote(){
    let voteForm = new FormData()
    voteForm.append('design_vote',this.vote.design_vote.toString())
    voteForm.append('design_comment',this.vote.design_comment)
    voteForm.append('usability_vote',this.vote.usability_vote.toString())
    voteForm.append('usability_comment',this.vote.usability_comment)
    voteForm.append('content_vote',this.vote.content_vote.toString())
    voteForm.append('content_comment',this.vote.content_comment)
    voteForm.append('overall_comment',this.vote.overall_comment)

    this.accountService.newVote(voteForm,this.project.index)
    this.ngOnInit()
  }

  ngOnInit(): void {
  }

}
