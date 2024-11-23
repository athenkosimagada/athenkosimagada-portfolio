import { Component, Input } from '@angular/core';
import { ProjectComponent } from "../../../../components/project/project.component";
import { ButtonComponent } from "../../../../components/button/button.component";

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectComponent, ButtonComponent],
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: any[] = [];
}
