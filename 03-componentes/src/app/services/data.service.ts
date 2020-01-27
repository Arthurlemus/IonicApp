import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

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

}
