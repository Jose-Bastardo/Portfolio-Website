import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  githubicon = faGithub;
  linkedinicon=faLinkedinIn;
  constructor() {}

  ngOnInit(): void {
  }

}
