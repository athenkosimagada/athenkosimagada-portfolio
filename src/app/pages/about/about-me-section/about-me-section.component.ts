import { Component } from '@angular/core';
import { SectionParagraphComponent } from "../../../components/section-paragraph/section-paragraph.component";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [SectionParagraphComponent],
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent {

}
