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
	private apiUrl = 'http://localhost:3000/api';
    constructor(private http: HttpClient) {}

    getMenuItems(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/menu`);
    }

    getSocialIcons(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/social-icons`);
    }

    // Atualizado para obter informações dos cards da API
    getCardsInfo(): Observable<CardInfo[]> {
        return this.http.get<CardInfo[]>(`${this.apiUrl}/cards-info`);
    }

	getSectionIds(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/section-ids`);
	  }

    // Novo método para obter informações dos cards da API
    getCardsInfoFromApi(): Observable<CardInfo[]> {
        return this.http.get<CardInfo[]>(`${this.apiUrl}/cards-info`);
    }
}
