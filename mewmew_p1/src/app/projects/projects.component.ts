import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

class CardInfo {
  constructor(
    public imgSrc: string,
    public altText: string,
    public badges: string[],
    public title: string,
    public text: string,
    public liveLink: string,
    public codeLink: string
  ) {}
}

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass']
})

export class ProjectsComponent implements OnInit {
  cardsInfo: CardInfo[] = [];
  sectionIds = { projects: 'projects' };

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.cardsInfo = this.communicationService.cardsInfo;
  }
}