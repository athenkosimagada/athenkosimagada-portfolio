import { Component } from '@angular/core';
import { NavLinksComponent } from '../../nav-links/nav-links.component';
import { SocialLinksComponent } from '../../social-links/social-links.component';
import { CloseButtonComponent } from '../../close-button/close-button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NavLinksComponent,
    SocialLinksComponent,
    CloseButtonComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isShow: boolean = false;
  handleMenuClick(value: boolean) {
    this.isShow = value;
  }
}
