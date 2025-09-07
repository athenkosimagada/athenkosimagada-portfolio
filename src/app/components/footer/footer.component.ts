import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { AnalyticsService } from '../../services';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    NavLinksComponent,
    SocialLinksComponent,
    CopyrightComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.analyticsService.trackEvent('page_view', 'footer', 'engagement');
  }
}
