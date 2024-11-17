import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  @Input() url: string = '/home';
  @Input() src: string = 'logo.svg';
  @Input() alt: string = 'Navigation Logo';
}
