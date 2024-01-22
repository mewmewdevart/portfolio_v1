import { Injectable } from '@angular/core';

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

@Injectable({
	providedIn: 'root'
})
export class CommunicationService {
	// Menu items of my navbar component
	menuItems = [
		{ label: 'Sobre', route: '#about' },
		{ label: 'Projetos', route: '#projects' },
		{ label: 'Contato', route: '#contact' }
	];

	// Social icons of my navbar component
	socialIcons = [
		{ name: 'Icone de acesso do Github', iconPath: '../assets/assets/images/icons/icon_github.svg', url: '#' },
		{ name: 'Icone de acesso do Linkedin', iconPath: '../assets/assets/images/icons/icon_linkedin.svg', url: '#' }
	];

	// Cards info of my projects component
	cardsInfo: CardInfo[] = [
	new CardInfo(
		'../../assets/assets/images/placeholder.png',
		'Alternative text 1', 
		['Typescript', 'Angular', 'Material UI'],
		'Lorem Ipsum 1',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		'#',
		'#'
	),
	new CardInfo(
		'../../assets/assets/images/placeholder.png',
		'Alternative text 2',
		['Typescript', 'Angular', 'Material UI'],
		'Lorem Ipsum 1',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		'#',
		'#'
	),
	new CardInfo(
		'../../assets/assets/images/placeholder.png',
		'Alternative text 3',
		['Typescript', 'Angular', 'Material UI'],
		'Lorem Ipsum 1',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		'#',
		'#'
	),
	new CardInfo(
		'../../assets/assets/images/placeholder.png',
		'Alternative text 4',
		['Typescript', 'Angular', 'Material UI'],
		'Lorem Ipsum 2',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		'#',
		'#'
	)
	];
}
