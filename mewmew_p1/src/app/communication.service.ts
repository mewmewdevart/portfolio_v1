import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CommunicationService {

	menuItems = [
		{ label: 'Sobre', route: '#about' },
		{ label: 'Experiência', route: '#experience' },
		{ label: 'Projetos', route: '#projects' },
		{ label: 'Contato', route: '#contact' }
	  ];

	socialIcons = [
		{ name: 'Icone de acesso do Github', iconPath: '../assets/assets/images/icons/icon_github.svg', url: '#'},
		{ name: 'Icone de acesso do Github', iconPath: '../assets/assets/images/icons/icon_linkedin.svg', url: '#'}
	  ]	  

}
