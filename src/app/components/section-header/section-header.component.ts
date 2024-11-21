import { Component, Input } from '@angular/core';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { SectionParagraphComponent } from '../section-paragraph/section-paragraph.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    SectionParagraphComponent
  ],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent {
  @Input() heading: string = '';
  @Input() paragraph: string = '';
}
