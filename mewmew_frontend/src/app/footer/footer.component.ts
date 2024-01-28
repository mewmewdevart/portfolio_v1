import { Component, OnInit } from '@angular/core';
import { CommunicationService, SocialItem } from '../communication.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
	socialIcons: SocialItem[] = [];
	currentYear: number = new Date().getFullYear();

	constructor(
		private communicationService: CommunicationService
	 ) {}

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
		this.socialIcons = this.communicationService.socialItems;
	}
}
