import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  githubicon = faGithub;
  linkedinicon=faLinkedinIn;
  constructor() { }

  ngOnInit(): void {
  }

}
