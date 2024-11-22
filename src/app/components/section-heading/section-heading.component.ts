import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.css']
})
export class SectionHeadingComponent {
  @Input() heading: string = '';
}
