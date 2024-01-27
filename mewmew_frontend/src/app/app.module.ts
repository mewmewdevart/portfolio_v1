import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommunicationService } from './communication.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Material UI Imports
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
  		HomePageComponent,
    LoadingComponent
	],
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		MatToolbarModule,
		MatButtonModule, 
		MatIconModule,
		MatMenuModule,
		MatButtonToggleModule,
		AppRoutingModule,
		HttpClientModule,
		MatTooltipModule
	],
	providers: [CommunicationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
