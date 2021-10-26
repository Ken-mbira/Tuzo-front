import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectIndex:number = 0
  private projectInstance = new BehaviorSubject<number>(this.projectIndex)

  currentIndex = this.projectInstance.asObservable();

  newIndex(index:number){
    this.projectInstance.next(index)
  }


  constructor() { }
}
