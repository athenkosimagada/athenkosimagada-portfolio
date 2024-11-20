import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SkillsToolsComponent } from './skills-tools/skills-tools.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsToolsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
