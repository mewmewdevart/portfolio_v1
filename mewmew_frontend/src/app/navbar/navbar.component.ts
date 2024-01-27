import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService, MenuItem, SocialItem } from '../communication.service';


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	socialIcons: SocialItem[] = [];
	menuItems: MenuItem[] = [];

	constructor(
		private router: Router,
		private communicationService: CommunicationService,
		private el: ElementRef
	) {}

	ngOnInit(): void {
		this.menuItems = this.communicationService.menuItems;
		this.socialIcons = this.communicationService.socialItems;
	}

	navigate(sectionId: string): void {
		const element = document.getElementById(sectionId);
	
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
	
}
