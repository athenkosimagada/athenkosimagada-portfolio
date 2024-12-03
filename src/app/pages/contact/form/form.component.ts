import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
contactForm: any;

}
