import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import  { heroSlides } from '../../../../../public/data/hero.json';
import { HeroSlideComponent } from '../hero-slide/hero-slide.component';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    HeroSlideComponent
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent {
  heroSlides: any[] = heroSlides

  constructor() {
    register();
  }
}
