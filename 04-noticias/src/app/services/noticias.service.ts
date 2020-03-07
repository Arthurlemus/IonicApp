import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get(`http://newsapi.org/v2/top-headlines?apiKey=9643c93903d54b1cb1792cc53a216f7a&country=us`);
  }
}
