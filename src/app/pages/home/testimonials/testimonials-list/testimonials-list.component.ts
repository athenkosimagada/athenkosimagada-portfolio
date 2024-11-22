import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { testimonials } from "../../../../../../public/data/testimonials.json";
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-testimonials-list',
  standalone: true,
  imports: [
    CommonModule,
    TestimonialComponent
  ],
  templateUrl: './testimonials-list.component.html',
  styleUrls: ['./testimonials-list.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsListComponent {
  testimonials: any[] = testimonials;
}
