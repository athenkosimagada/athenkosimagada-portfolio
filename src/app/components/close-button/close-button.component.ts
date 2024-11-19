import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-close-button',
  standalone: true,
  imports: [],
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.css'
})
export class CloseButtonComponent {
  @Output() linkClicked = new EventEmitter<boolean>();
  handleButtonClick(value: boolean) {
    this.linkClicked.emit(value);
  }
}
