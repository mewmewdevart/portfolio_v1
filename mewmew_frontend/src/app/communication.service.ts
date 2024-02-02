import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  BehaviorSubject} from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface MenuItem {
  name: string;
  route: string;
}

export interface SocialItem {
	name: string;
	iconPath: string;
	url: string;
}

export interface CardInfo {
	imagePath: string;
	category: string;
	favorite: boolean;
	titleProject: string;
	altTitle: string;
	badges: string[];
	description: string;
	liveUrl: string;
	codeUrl: string;
}


@Injectable({
	providedIn: 'root'
})
export class CommunicationService {
	private apiUrl = 'https://mewmewdev-backend.vercel.app/api';
	private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

	show(): void {
		this.isLoading.next(true);
	}
	
	hide(): void {
		this.isLoading.next(false);
	}	

	constructor(private http: HttpClient) {}

	menuItems: MenuItem[] = [
		{ name: 'Sobre', route: 'about' },
		{ name: 'Projetos', route: 'projects' },
		{ name: 'Contato', route: 'contact' }
	];	

	socialItems: SocialItem[] = [
		{ name: 'Github', iconPath: '../../assets/assets/images/icons/icon_github.svg', url: 'https://github.com/mewmewdevart' },
		{ name: 'Linkedin', iconPath: '../../assets/assets/images/icons/icon_linkedin.svg', url: 'https://www.linkedin.com/in/mewmewdevart/' },
		{ name: 'Itch io', iconPath: '../../assets/assets/images/icons/icon_itch.svg', url: 'https://mewmewdevart.itch.io/' },
		{ name: 'Behance', iconPath: '../../assets/assets/images/icons/icon_behance.svg', url: 'https://www.behance.net/MewmewDevArt' },
		{ name: 'Fiverr', iconPath: '../../assets/assets/images/icons/icon_fiverr.svg', url: 'https://br.fiverr.com/mewmewdevart' },
	];

	getCardsInfo(): Observable<CardInfo[]> {
		return this.http.get<CardInfo[]>(`${this.apiUrl}/cards-info`).pipe(
			catchError((error) => {
				console.error('Error fetching card info:', error);
				throw error;
			})
		);
	}
}
