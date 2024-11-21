import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './section-paragraph.component.html',
  styleUrls: ['./section-paragraph.component.css']
})
export class SectionParagraphComponent {
  @Input() paragraph: string = '';
  @Input() center: boolean = false;
}
