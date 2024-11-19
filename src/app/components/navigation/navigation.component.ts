import { Component, HostListener } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    LogoComponent,
    NavLinksComponent,
    SocialLinksComponent,
    MenuComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isScrolling: boolean = false;
  isSmallScreen: boolean = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolling = window.scrollY > 0;
  }
}
