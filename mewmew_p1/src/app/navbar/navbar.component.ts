import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
	menuItems = [
		{ label: 'Sobre', route: '#about' },
		{ label: 'Experiência', route: '#experience' },
		{ label: 'Projetos', route: '#projects' },
		{ label: 'Contato', route: '#contact' }
	];

	lineItems = [
		{ name: 'Icone de acesso do Github', iconPath: '../../assets/assets/images/icons/icon_github.svg', url: '#'},
		{ name: 'Icone de acesso do LinkedIn', iconPath: '../../assets/assets/images/icons/icon_linkedin.svg', url: '#'},
		{ name: 'Icone de acesso do Behance', iconPath: '../../assets/assets/images/icons/icon_behance.svg', url: '#'},
	]

	constructor(private router: Router) {}

	navigate(route: string): void {
		this.router.navigateByUrl(route);
	}
}
