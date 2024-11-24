import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-tools-list',
  standalone: true,
  imports: [],
  templateUrl: './skills-tools-list.component.html',
  styleUrls: ['./skills-tools-list.component.css']
})
export class SkillsToolsListComponent {
  skillsTools: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Docker',
    'NPM',
    'Webpack',
    'Jasmine',
    'Karma',
    'Jest',
    'Visual Studio Code',
    'Chrome DevTools',
    'Postman',
    'Insomnia',
    'Figma',
    'Photoshop',
    'Illustrator',
    'Premiere Pro',
    'After Effects',
    'Sketch',
    'Framer X'
  ];
}
