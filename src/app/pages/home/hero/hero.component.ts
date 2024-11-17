import { Component } from '@angular/core';
import  { heroSlides } from '../../../../../public/data/hero.json';
import { HeroSlideComponent } from '../hero-slide/hero-slide.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    HeroSlideComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroSlides: any = heroSlides
}
