import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SoftSkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent,
    BannerComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SoftSkillsComponent,
    ProjectsComponent]
})
export class AppModule { }
