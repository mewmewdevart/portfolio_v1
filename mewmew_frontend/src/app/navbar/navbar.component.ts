import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService, MenuItem, SocialItem } from '../communication.service';
import { ActivatedRoute } from '@angular/router';

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
		private el: ElementRef,
		private route: ActivatedRoute
	  ) {}
	  

	ngOnInit(): void {
		this.menuItems = this.communicationService.menuItems;
		this.socialIcons = this.communicationService.socialItems;
	}

	reloadInRoot(): void {
		window.location.href = '/';
	  }

	  navigate(route: string): void {
		const isProjectsPage = this.route.snapshot.routeConfig?.path === 'projetos';
		const isAboutPage = this.route.snapshot.routeConfig?.path === 'sobre';
	  
		if (isProjectsPage) {
		  this.router.navigate([''], { fragment: route });
		} else if (isAboutPage) {
			this.router.navigate([''], { fragment: route });
		} else {
		  const element = document.getElementById(route);
	  
		  if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		  }
		}
	  }	  
	  
	
}
