import { Component, OnInit } from '@angular/core';
import { CommunicationService, MenuItem, CardInfo } from '../communication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass', './home-page2.component.sass']
})
export class HomePageComponent implements OnInit {
	menuItems: MenuItem[] = [];
	cardsInfo: CardInfo[] = [];

	constructor(private router: Router, private communicationService: CommunicationService) {}

	ngOnInit(): void {
		this.menuItems = this.communicationService.menuItems;

		this.communicationService.getCardsInfo().subscribe(
			(data: CardInfo[]) => {
				//console.log('Dados dos cards:', data);
				this.cardsInfo = data;
			},
			(error) => {
				console.error('Erro ao obter dados dos cards:', error);
			}
		);
	}

	sectionIds = { about: 'about', projects: 'projects', contact: 'contact'};

	navigate(sectionId: string): void {
		const element = document.getElementById(sectionId);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	navigateToProjects(): void {
		window.location.href = 'projetos';
	}

	navigateToAbout(): void {
		window.location.href = 'sobre';
	}
}
