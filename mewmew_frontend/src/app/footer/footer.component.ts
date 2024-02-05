import { Component, OnInit } from '@angular/core';
import { CommunicationService, SocialItem } from '../communication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
	socialIcons: SocialItem[] = [];
	currentYear: number = new Date().getFullYear();
	isHomePage: boolean = true;

	constructor(
		private router: Router,
		private communicationService: CommunicationService
	) {}

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
		this.socialIcons = this.communicationService.socialItems;

		const isProjectsPage = this.router.url.includes('more-projects');
		const isAboutPage = this.router.url.includes('about-me');

		if (isProjectsPage || isAboutPage) {
			this.isHomePage = false;
		}
	}
}
