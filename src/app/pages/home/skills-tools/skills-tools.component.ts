import { Component } from '@angular/core';
import  { skillsTools } from '../../../../../public/data/skills-tools.json';
import { SkillToolComponent } from '../../../components/skill-tool/skill-tool.component';

@Component({
  selector: 'app-skills-tools',
  standalone: true,
  imports: [
    SkillToolComponent
  ],
  templateUrl: './skills-tools.component.html',
  styleUrl: './skills-tools.component.css'
})
export class SkillsToolsComponent {
  skillsTools: any[] = skillsTools
}
