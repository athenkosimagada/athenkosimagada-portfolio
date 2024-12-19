/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();
injectSpeedInsights();
inject();

bootstrapApplication(AppComponent, appConfig)
.then(() => {
  const loadingElement = document.querySelector('.loading') as HTMLElement;
  if (loadingElement) {
    loadingElement.style.display = 'none';
  }
})
.catch((err) => console.error(err));