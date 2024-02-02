import { Component } from '@angular/core';
import { CategoryFilterPipe } from './category-filter.pipe';
import { CommunicationService, CardInfo } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.sass'],
  providers: [CategoryFilterPipe]
})
export class ProjectsPageComponent {
  selectedCategory: string = 'TODOS';
  cardsInfo: CardInfo[] = [];

  updateCategory(category: string): void {
    this.selectedCategory = category;
  }

  constructor(
    private communicationService: CommunicationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.communicationService.getCardsInfo().subscribe(
      (data: CardInfo[]) => {
        console.log('Dados dos cards:', data);
        this.cardsInfo = data;
      },
      (error) => {
        console.error('Erro ao obter dados dos cards:', error);
      }
    );
  }

  navigateToHome(section: string): void {
    this.router.navigate([''], { fragment: section });
  }
}
