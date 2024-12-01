import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeroSectionComponent, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
