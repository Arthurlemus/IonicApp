import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avengers', 'El señor de los anillos', 'La vida es Bella'];
  
  constructor(private moviesService: MoviesService ) {}

  buscar(event) {
    const valor = event.detail.value;
    this.moviesService.buscarPelicula(valor).subscribe(resp => {
      console.log('REspuesta', resp);
    });
  }



}
