import { Component, Input } from '@angular/core';
import { ProjectComponent } from "../project/project.component";

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: any[] = [];
}
