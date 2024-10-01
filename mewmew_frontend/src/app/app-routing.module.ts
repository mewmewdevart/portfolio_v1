import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'projetos', component: ProjectsPageComponent },
	{ path: 'sobre', component: AboutPageComponent },
	{ path: '**', component: ResponseComponent }
  ];  

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
