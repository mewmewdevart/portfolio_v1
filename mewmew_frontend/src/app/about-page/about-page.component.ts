import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent {
  constructor(
    private communicationService: CommunicationService,
    private router: Router,
  ) {}

  navigateToHome(section: string): void {
    this.router.navigate([''], { fragment: section });
  }
}
