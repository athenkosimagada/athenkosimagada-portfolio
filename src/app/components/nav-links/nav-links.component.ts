import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {
  @Input() column: boolean = false;

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
