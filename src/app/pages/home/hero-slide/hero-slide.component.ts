import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-slide',
  standalone: true,
  imports: [],
  templateUrl: './hero-slide.component.html',
  styleUrl: './hero-slide.component.css'
})
export class HeroSlideComponent {
  @Input() slide: any
}
