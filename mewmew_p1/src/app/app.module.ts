import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommunicationService } from './communication.service';
import { AppRoutingModule } from './app-routing.module';

// Material UI Imports
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		AboutMeComponent,
		ProjectsComponent,
		FooterComponent,
		ContactComponent
	],
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		MatToolbarModule,
		MatButtonModule, 
		MatIconModule,
		MatMenuModule,
		MatButtonToggleModule,
		AppRoutingModule
	],
	providers: [CommunicationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
