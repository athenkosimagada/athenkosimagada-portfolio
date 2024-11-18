import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-slide',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './hero-slide.component.html',
  styleUrl: './hero-slide.component.css',
})
export class HeroSlideComponent {
  @Input() slide: any
}
