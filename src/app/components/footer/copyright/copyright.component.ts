import { Component } from '@angular/core';
import { SectionParagraphComponent } from "../../section-paragraph/section-paragraph.component";

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [SectionParagraphComponent],
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent {

}
