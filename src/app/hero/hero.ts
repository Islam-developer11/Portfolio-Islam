import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero { 
  name: string = 'Islam';
  title: string = 'Software Engineer.';
  description: string = 'I build modern, clean, and user-friendly digital experiences with a passion for turning ideas into functional applications.';
  
 isAvailableForWork: boolean = true;
  avatarUrl = '/islam.png';

currentStatus: string = 'learner';

}
