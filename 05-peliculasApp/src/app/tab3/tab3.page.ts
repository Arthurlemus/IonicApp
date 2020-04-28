import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoPorGenero: any[] = [];
  constructor(private dataLocal: DataLocalService, private movieService: MoviesService) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.movieService.cargarGeneros();
    console.log('Generos Tab3', this.generos);
    this.peliculasPorGenero(this.generos, this.peliculas);
  }

  peliculasPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
      this.favoritoPorGenero = [];

      generos.forEach(genero => {
        this.favoritoPorGenero.push({
          genero: genero.name,
          pelis: peliculas.filter(peli => {
            return peli.genres.find(gene => gene.id === genero.id);
          })
        });
      });

      console.log('newnew', this.favoritoPorGenero);
  }

}
