import { Component, Input } from '@angular/core';
import { ProjectComponent } from "../../../../components/project/project.component";
import { LoadButtonComponent } from "../../../../components/load-button/load-button.component";

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectComponent, LoadButtonComponent],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: any[] = [];
}
