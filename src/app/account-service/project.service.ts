import { Injectable } from '@angular/core';

import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project = new Project(0,"","",new Date(),new Date(),"","","","",[])


  constructor() { }
}
