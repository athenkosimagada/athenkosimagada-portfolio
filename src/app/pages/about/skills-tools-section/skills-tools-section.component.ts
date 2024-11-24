import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../../../components/section-header/section-header.component";
import { SkillsToolsListComponent } from "../skills-tools-list/skills-tools-list.component";

@Component({
  selector: 'app-skills-tools-section',
  standalone: true,
  imports: [SectionHeaderComponent, SkillsToolsListComponent],
  templateUrl: './skills-tools-section.component.html',
  styleUrls: ['./skills-tools-section.component.css']
})
export class SkillsToolsSectionComponent {

}
