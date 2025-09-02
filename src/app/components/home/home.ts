import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
onSubmit() {
    alert('Formulario enviado. ¡Gracias por tu interés!');
    // Aquí podrías integrar lógica para enviar los datos a un backend o servicio externo
  }
}
