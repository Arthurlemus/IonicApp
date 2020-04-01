import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  
  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 2.7,
   freeMode: true,
   spaceBetween: -10
  // slidesPerColumn: 2,
   // slidesPerColumnFill: 'row'
 };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  masPeliculas() {
    this.cargarMas.emit();
  }

  async verDetalle(id: string) {
    const modalDetalle = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modalDetalle.present();
  }

}
