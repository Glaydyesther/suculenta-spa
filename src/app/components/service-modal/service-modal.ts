import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-service-modal',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './service-modal.html',
  styleUrl: './service-modal.css'
})
export class ServiceModal {
constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  
}
}
