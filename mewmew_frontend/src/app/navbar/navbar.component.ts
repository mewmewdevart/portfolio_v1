// navbar.component.ts

import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];
  socialIcons: any[] = [];
  sectionIds: { [key: string]: string } = {};

  constructor(private router: Router, private communicationService: CommunicationService, private el: ElementRef) {}

  ngOnInit(): void {
    this.communicationService.getMenuItems().subscribe(data => this.menuItems = data);
    this.communicationService.getSocialIcons().subscribe(data => this.socialIcons = data);

    // Adicione o tipo explícito ou utilize 'any'
    this.communicationService.getSectionIds().subscribe((data: any) => this.sectionIds = data);
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
