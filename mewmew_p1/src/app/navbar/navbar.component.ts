import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  menuItems = this.communicationService.menuItems;

  // Social icons from CommunicationService
  socialIcons = this.communicationService.socialIcons;
  constructor(private router: Router, private communicationService: CommunicationService) {}

  navigate(route: string): void {
    this.router.navigateByUrl(route);
  }
}
