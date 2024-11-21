import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SkillsToolsComponent } from './skills-tools/skills-tools.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from "../about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsToolsComponent,
    WelcomeComponent,
    ServicesComponent,
    PortfolioComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
