import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxStars: number = 5;

  get stars(): number[] {
    return Array(this.maxStars).fill(0);
  }
}
