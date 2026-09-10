import { Component } from '@angular/core';

export interface ProjectItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  footerLabel?: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  styleUrl: './project.css',
  templateUrl: './project.html',
})
export class Project {
  projectsList: ProjectItem[] = [
    {
      id: 1,
      badge: 'Graduation Project',
      title: 'ELECTRA',
      description:
        'EV Infrastructure Management System built to manage charging stations, hardware communication via ESP32, and centralized Web APIs.',
      technologies: ['PHP Laravel', 'ESP32', 'RESTful API', 'MySQL'],
      githubUrl: 'https://github.com/Islam-developer11/Electra',
    },
    {
      id: 2,
      badge: 'Internship Work',
      title: 'Web Application Modules',
      description:
        'Developed responsive UI components, integrated dynamic REST APIs, and refined full-stack web application features during internship training.',
      technologies: ['Full-Stack Development', 'RESTful APIs', 'UI Integration'],
      footerLabel: 'Enterprise Practice',
    },
    {
      id: 3,
      badge: 'Personal Project',
      title: 'Modern Developer Portfolio',
      description:
        'Responsive Single Page Application built from scratch using Angular Standalone Components and Tailwind CSS for smooth layout navigation.',
      technologies: ['Angular 17+', 'Tailwind CSS', 'TypeScript'],
      githubUrl: 'https://portfolio-islam-three.vercel.app',
    },
  ];
}
