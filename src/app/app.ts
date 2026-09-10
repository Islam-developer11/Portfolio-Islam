import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Project } from './project/project';
import { Contact } from './contact/contact';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, Project, Contact],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Protofilo-Islam');
}
