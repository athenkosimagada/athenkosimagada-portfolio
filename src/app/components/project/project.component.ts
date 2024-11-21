import { Component, Input } from '@angular/core';
import { SectionParagraphComponent } from "../section-paragraph/section-paragraph.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [SectionParagraphComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() project: any
}
