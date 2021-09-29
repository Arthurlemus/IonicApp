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
  constructor(private http: HttpClient) { }
  
  private ejecutarQuery<T>(query: string){
      query = apiUrl + query;
      return this.http.get<T>(query, {headers});
  }

  getTopHeadLines(){
    return this.ejecutarQuery<RespuestaTopHeadLines>('/top-headlines?country=us');
    // return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9643c93903d54b1cb1792cc53a216f7a`);
  }

  getTopHeadLinesCategoria(categoria: string){
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}`);
  }

}
