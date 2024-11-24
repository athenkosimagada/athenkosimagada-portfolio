import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutMeSectionComponent } from "./about-me-section/about-me-section.component";
import { SkillsToolsSectionComponent } from "./skills-tools-section/skills-tools-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillsToolsSectionComponent
],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
