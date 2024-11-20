import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../components/section-heading/section-heading.component';
import { SectionParagraphComponent } from '../../../components/section-paragraph/section-paragraph.component';
import { SocialLinksComponent } from '../../../components/social-links/social-links.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    SectionParagraphComponent,
    SocialLinksComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

}
