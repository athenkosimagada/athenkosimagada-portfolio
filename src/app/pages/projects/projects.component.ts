import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { ProjectsListComponent } from "../../components/projects-list/projects-list.component";
import { projects } from "../../../../public/data/projects.json";
import { HeroComponent } from "../home/hero/hero.component";
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroSectionComponent, ProjectsListComponent, HeroComponent, SectionHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = projects
}
