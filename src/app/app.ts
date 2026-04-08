import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    TechStackComponent,
    ContactComponent,
  ],
  template: `
    <div class="dark">
      <app-navbar></app-navbar>
      <main>
        <app-hero></app-hero>
        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-tech-stack></app-tech-stack>
        <app-contact></app-contact>
      </main>
    </div>
  `,
})
export class AppComponent {}

