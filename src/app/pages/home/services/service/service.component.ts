import { Component, Input } from '@angular/core';
import { SectionParagraphComponent } from '../../../../components/section-paragraph/section-paragraph.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    SectionParagraphComponent
  ],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() service: any;
}
