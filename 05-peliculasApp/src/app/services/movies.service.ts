import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, PeliculaDetalle, RespuestaActores, Actores, Pelicula, Genre } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const URL = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  private buscarPage = 0;
  generos: Genre[] = [];

  constructor(private http: HttpClient) { }

  // ─────────────────────────────────────────────────────────────────────────────
  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es`;
    return this.http.get<T>(query);
  }

// ─────────────────────────────────────────────────────────────────────────────
  getMovies() {
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1 , 0 ).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    let inicio = `${hoy.getFullYear()}-${mesString}-01`;
    let fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    // tslint:disable-next-line: max-line-length
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

// ─────────────────────────────────────────────────────────────────────────────
  getPopulares() {
    this.popularesPage ++;
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?sort_by=populary.desc&page=${this.popularesPage}`);
  }

// ─────────────────────────────────────────────────────────────────────────────
  getPeliculaDetalle(id: string) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

// ─────────────────────────────────────────────────────────────────────────────
  getActoresPelicula(id: string) {
    return this.ejecutarQuery<RespuestaActores>(`/movie/${id}/credits?a=1`);
  }

// ─────────────────────────────────────────────────────────────────────────────
  buscarPelicula(texto: string) {
    this.buscarPage ++;
    return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${texto}&page=${this.buscarPage}&include_adult=true`);
  }

// ─────────────────────────────────────────────────────────────────────────────
  cargarGeneros(): Promise<Genre[]> {
    return new Promise((resolve) => {
      this.ejecutarQuery(`/genre/movie/list?include_image_language=es`).subscribe(resp => {
        // tslint:disable-next-line: no-string-literal
        this.generos = resp['genres'];
        resolve(this.generos);
      });
    });
  }
}

