import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { NavLinksComponent } from "../nav-links/nav-links.component";
import { SocialLinksComponent } from "../social-links/social-links.component";
import { CopyrightComponent } from "./copyright/copyright.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, NavLinksComponent, SocialLinksComponent, CopyrightComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
