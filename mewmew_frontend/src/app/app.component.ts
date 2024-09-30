import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'MewmewDev';

	constructor(public service: CommunicationService) {}

	ngOnInit() {
		this.service.show();

		setTimeout(() => {
			this.service.hide();
		}, 3000); 
	}
}
