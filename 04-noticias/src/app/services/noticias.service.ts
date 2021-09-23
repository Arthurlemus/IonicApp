import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../pages/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9643c93903d54b1cb1792cc53a216f7a`);
  }

}
