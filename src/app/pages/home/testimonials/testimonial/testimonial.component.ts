import { Component, Input } from '@angular/core';
import { StarRatingComponent } from "../../../../components/star-rating/star-rating.component";

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  @Input() testimonial: any
}
