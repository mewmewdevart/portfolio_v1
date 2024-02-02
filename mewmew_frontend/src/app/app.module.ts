// Angular Core Modules
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CategoryFilterPipe } from './projects-page/category-filter.pipe';
import { ResponseComponent } from './response/response.component';
import { AboutPageComponent } from './about-page/about-page.component';

// App Services
import { CommunicationService } from './communication.service';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// HTTP Client Module
import { HttpClientModule } from '@angular/common/http';

// Angular Router Modules
import { Router, RouterModule } from '@angular/router';

// Angular Forms Module
import { FormsModule } from '@angular/forms';

// Material UI Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';


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
  AboutPageComponent,
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
		FormsModule,
		MatTabsModule
	],
	providers: [CommunicationService],
	bootstrap: [AppComponent]
})
export class AppModule { }
