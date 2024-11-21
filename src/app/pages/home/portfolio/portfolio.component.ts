import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../components/section-header/section-header.component';
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { projects } from "../../../../../public/data/projects.json";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    ProjectsListComponent
],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: any[] = projects;
}
