import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { RespuestaTopHeadLines } from '../pages/interfaces/interface';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
  
const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-Key' : apiKey
});

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {
  
  pageHeadLines: number = 0;
  categoriaActual = '';
  paginaActual = 0;
  
   constructor(private http: HttpClient, private storage: Storage) {

   }
// ─────────────────────────────────────────────────────────────────────────────  
  private ejecutarQuery<T>(query: string){
      query = apiUrl + query;
      return this.http.get<T>(query, {headers});
  }

// ─────────────────────────────────────────────────────────────────────────────
  getTopHeadLines(){
    this.pageHeadLines ++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&page=${this.pageHeadLines}`);
  }
  
// ─────────────────────────────────────────────────────────────────────────────
  getTopHeadLinesCategoria(categoria: string){
    
    if(this.categoriaActual === categoria){
      this.paginaActual ++;
    }else{
      this.paginaActual = 1;
      this.categoriaActual = categoria;
    }

    this.pageHeadLines++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}&page=${this.paginaActual}`);
  }

}
