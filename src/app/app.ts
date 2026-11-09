import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Results } from './components/results/results';
import { About } from './components/about/about';
import { Cases } from './components/cases/cases';
import { Ai } from './components/ai/ai';
import { Stack } from './components/stack/stack';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Results, About, Cases, Experience, Projects, Ai, Stack, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
