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
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Material UI Imports
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingComponent } from './loading/loading.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CategoryFilterPipe } from './projects-page/category-filter.pipe';
import { ResponseComponent } from './response/response.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
  		HomePageComponent,
		LoadingComponent,
		ProjectsPageComponent,
		CategoryFilterPipe,
  ResponseComponent,
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
		MatTooltipModule,
		RouterModule,
		FormsModule
	],
	providers: [CommunicationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
