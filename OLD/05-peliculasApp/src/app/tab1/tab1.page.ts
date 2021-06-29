import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];
  
  constructor(private moviesService: MoviesService) {}

  ngOnInit(){
    this.moviesService.getMovies().subscribe(movies => {
      this.peliculasRecientes = movies.results;
    });

    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe(resp => {
      let popularesTemp = [];

      resp.results.forEach(item => {
        if (item) {
           popularesTemp.push(item);
        }
      });

      if (this.populares.length > 0) {
        this.populares = [...this.populares,  ... popularesTemp];
      } else {
        this.populares = popularesTemp;
      }

    });
  }

  cargarMas() {
    this.getPopulares();
  }

}
