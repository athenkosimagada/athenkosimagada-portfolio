import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { register } from 'swiper/element/bundle';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BusyService } from './core/busy.service';

register();
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    ContactSectionComponent,
    NgxSpinnerModule
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Portfolio';
  isLoading: boolean = true;

  constructor(
    private busyService: BusyService, 
    private router: Router
  ) {
    this.showSpinnerOnLoad();
    this.handleRouteChanges();
  }

  private showSpinnerOnLoad(): void {
    this.busyService.busy();
    setTimeout(() => {
      this.busyService.idle();
    }, 2000)
    this.isLoading = false;
  }

  private handleRouteChanges(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.busyService.busy();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.busyService.idle();
        }, 2000);
        this.isLoading = false;
      }
    });
  }
}
