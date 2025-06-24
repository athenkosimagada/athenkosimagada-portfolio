import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-tools-list',
  standalone: true,
  imports: [],
  templateUrl: './skills-tools-list.component.html',
  styleUrls: ['./skills-tools-list.component.css'],
})
export class SkillsToolsListComponent {
  skillsTools: string[] = [
    'C#',
    'JavaScript',
    'SQL',
    'HTML',
    'CSS',
    'ASP.NET Core',
    'Blazor',
    'Angular',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'SQL Server',
    'Git',
    'GitHub',
    'Docker',
    'Jasmine',
    'AJAX',
    'Vercel',
    'Visual Studio',
    'Agile',
    'Scrum',
    'Clean Architecture',
    'Problem-Solving',
    'Time Management',
    'Communication',
    'Adaptability',
    'Teamwork',
  ];
}
