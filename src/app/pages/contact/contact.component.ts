import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeroSectionComponent, 
    SectionHeaderComponent, 
    FormComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
