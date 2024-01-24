import { Component, OnInit } from '@angular/core';
import { CommunicationService, CardInfo } from '../communication.service';

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
		this.communicationService.getCardsInfo().subscribe(
			(data: CardInfo[]) => {
				console.log('Dados dos cards:', data);
				this.cardsInfo = data;
			},
			(error) => {
				console.error('Erro ao obter dados dos cards:', error);
			}
		);
	}
	
}
