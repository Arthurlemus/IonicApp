import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.URL);
  }

  getMenu() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
  
  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get('/assets/data/superheroes.json').pipe(delay(5000));
  }
}
