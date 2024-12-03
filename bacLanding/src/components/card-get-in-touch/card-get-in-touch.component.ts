import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-get-in-touch',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './card-get-in-touch.component.html',
  styleUrls: ['./card-get-in-touch.component.scss']
})
export class CardGetInTouchComponent {
  onSubmit() {
    alert('Mensaje enviado!');
  }
}
