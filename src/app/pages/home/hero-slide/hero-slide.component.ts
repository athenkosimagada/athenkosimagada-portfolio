import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-hero-slide',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent
],
  templateUrl: './hero-slide.component.html',
  styleUrls: ['./hero-slide.component.css'],
})
export class HeroSlideComponent {
  @Input() slide: any
}
