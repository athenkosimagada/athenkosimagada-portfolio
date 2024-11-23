import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SkillsToolsComponent } from './skills-tools/skills-tools.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsToolsComponent,
    WelcomeComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
