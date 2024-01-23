import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
	currentYear: number = new Date().getFullYear();

	ngOnInit() {
		this.currentYear = new Date().getFullYear();
	}
}
