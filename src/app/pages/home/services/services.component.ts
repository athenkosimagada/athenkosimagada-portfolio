import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../components/section-header/section-header.component';
import { ServicesListComponent } from './services-list/services-list.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    ServicesListComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
 
}
