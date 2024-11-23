import { Component } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { ButtonComponent } from "../button/button.component";
import { SectionParagraphComponent } from '../section-paragraph/section-paragraph.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SocialLinksComponent, SectionParagraphComponent, ButtonComponent],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

}
