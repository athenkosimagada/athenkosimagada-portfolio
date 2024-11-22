import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  @Input() testimonial: any
}
