import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tool',
  standalone: true,
  imports: [],
  templateUrl: './skill-tool.component.html',
  styleUrl: './skill-tool.component.css'
})
export class SkillToolComponent {
  @Input() skillTool: any
}
