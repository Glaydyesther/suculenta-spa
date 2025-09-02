import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ServiceModal } from '../service-modal/service-modal';


@Component({
  selector: 'app-services',
  imports: [CommonModule, MatButtonModule,MatCardModule,MatIconModule, MatDialogModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  constructor(private dialog: MatDialog){}
  // services = [
  //   {
  //     name: 'Masaje Descontracturante',
  //     image: 'assets/images/image1.jpg',
  //     description: 'Alivia tus dolores'
  //   },
  //   {
  //     name: 'Masaje Sueco',
  //     image: 'assets/images/image1.jpg',
  //     description: 'Alivia tus doloress'
  //   },
  //   {
  //     name: 'Masaje Linfático',
  //     image: 'assets/images/image1.jpg',
  //     description: 'Alivia tus dolores'
  //   },
  //   {
  //     name: 'Masaje Facial',
  //     image: 'assets/images/image1.jpg',
  //     description: 'Alivia tus dolores'
  //   }

  // ];
  // openModal(service:any){
  //   this.dialog.open(ServiceModal,{
  //     data:service,
  //     width:'400px'
  //   });
  // }
}
