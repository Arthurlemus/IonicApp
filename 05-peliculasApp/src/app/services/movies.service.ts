import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB, PeliculaDetalle, RespuestaActores } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const URL = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  private popularesPage = 0;
  
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
}

