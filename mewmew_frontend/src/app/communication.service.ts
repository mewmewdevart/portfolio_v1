import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CardInfo {
	constructor(
		public imagePath: string,
		public altTitle: string,
		public badges: string[],
		public titleProject: string,
		public description: string,
		public liveUrl: string,
		public codeUrl: string
	) {}
}

@Injectable({
	providedIn: 'root'
})
export class CommunicationService {
	private apiUrl = 'https://portfolio-v1-gold.vercel.app/api';

	constructor(private http: HttpClient) {}

	getMenuItems(): Observable<any[]> {
		return this.http.get<any[]>(`${this.apiUrl}/menu`);
	}

	getSocialIcons(): Observable<any[]> {
		return this.http.get<any[]>(`${this.apiUrl}/social-icons`);
	}

	getCardsInfo(): Observable<CardInfo[]> {
		return this.http.get<CardInfo[]>(`${this.apiUrl}/cards-info`);
	}

	getSectionIds(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/section-ids`);
	}

	getCardsInfoFromApi(): Observable<CardInfo[]> {
		return this.http.get<CardInfo[]>(`${this.apiUrl}/cards-info`);
	}
}
