import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  menuItems = this.communicationService.menuItems;
  socialIcons = this.communicationService.socialIcons;

  sectionIds: { [key: string]: string } = {};

  constructor(private router: Router, private communicationService: CommunicationService, private el: ElementRef) {
    // Inicialize sectionIds no construtor
    this.sectionIds = this.communicationService.sectionIds;
  }

  navigate(route: string): void {
    if (route.startsWith('#')) {
      const section = this.sectionIds[route.slice(1)];
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigateByUrl(route);
    }
  }
}
