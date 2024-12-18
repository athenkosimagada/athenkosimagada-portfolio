import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
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
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  constructor(
    private busyService: BusyService, 
    private router: Router
  ) {
    this.setupSpinnerForRouting();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.busyService.idle();
    }, 100);
  }

  onActivate(event: any) {
    setTimeout(() => {
      this.busyService.idle();
    }, 100);
  }

  onContentRendered(): void {
    this.busyService.idle();
  }

  private setupSpinnerForRouting(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.busyService.busy();
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.busyService.idle();
      }
    });
  }
}
