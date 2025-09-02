import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking {
onSubmit() {
    alert('Gracias por ponerte en contacto. Te responderemos pronto.');
    // Aquí puedes integrar lógica para enviar los datos a un backend o servicio externo
  }
}
