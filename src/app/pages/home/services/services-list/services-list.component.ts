import { Component } from '@angular/core';
import { services } from '../../../../../../public/data/services.json';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [
    ServiceComponent
  ],
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  services: any[] = services
}
