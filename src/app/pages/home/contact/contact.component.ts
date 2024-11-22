import { Component } from '@angular/core';
import { SectionParagraphComponent } from "../../../components/section-paragraph/section-paragraph.component";
import { SocialLinksComponent } from "../../../components/social-links/social-links.component";
import { LoadButtonComponent } from "../../../components/load-button/load-button.component";
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionParagraphComponent, SocialLinksComponent, LoadButtonComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
