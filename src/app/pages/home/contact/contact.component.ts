import { Component } from '@angular/core';
import { SectionParagraphComponent } from "../../../components/section-paragraph/section-paragraph.component";
import { SocialLinksComponent } from "../../../components/social-links/social-links.component";
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionParagraphComponent, SocialLinksComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
