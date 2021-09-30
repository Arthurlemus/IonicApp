import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../pages/interfaces/interface';
import { environment } from '../../environments/environment';
  
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
  
  constructor(private http: HttpClient) { }
  
  private ejecutarQuery<T>(query: string){
      query = apiUrl + query;
      return this.http.get<T>(query, {headers});
  }

  getTopHeadLines(){
    this.pageHeadLines ++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&page=${this.pageHeadLines}`);
  }

  getTopHeadLinesCategoria(categoria: string){
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}`);
  }

}
