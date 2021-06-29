import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  peliculas: Pelicula[] = [];
  buscando = false;
  ideas: string[] = ['Spiderman', 'Avengers', 'El señor de los anillos', 'La vida es Bella'];

// ─────────────────────────────────────────────────────────────────────────────
  constructor(private moviesService: MoviesService, private modaCtrl: ModalController ) {}

// ─────────────────────────────────────────────────────────────────────────────
  buscar(event) {
      const valor: string = event.detail.value;

      if (valor.length === 0) {
        this.peliculas = [];
        this.buscando = false;
        return;
      }

      this.buscando = true;
      this.moviesService.buscarPelicula(valor).subscribe(resp => {
        this.buscando = false;
        this.peliculas = resp.results;
      }, error => {
        console.log('Error', error.message);
      });

  }

// ─────────────────────────────────────────────────────────────────────────────
  async verDetalle(id: string) {
    const modalDetalle = await this.modaCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modalDetalle.present();
  }



}
