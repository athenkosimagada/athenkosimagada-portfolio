import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent {
  @Input() isOriginal: boolean = false
}
