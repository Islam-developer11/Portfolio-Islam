import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  // الكود والبيانات الخاصة بالـ About

  title = 'About Me';
  university = 'Al-Zaytoonah University of Jordan';
  
  // متغير للتحكم بظهور التفاصيل الإضافية باستخدام @if
  showMoreDetails: boolean = false;

  // متغير للتحكم بالـ Tabs باستخدام @switch
  activeTab: 'skills' | 'interests' | 'experience' = 'skills';

  // دالة تبديل حالة التفاصيل
  toggleDetails() {
    this.showMoreDetails = !this.showMoreDetails;
  }
}
