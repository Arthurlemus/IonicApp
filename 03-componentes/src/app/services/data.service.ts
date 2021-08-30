import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuInterface } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu(){
    return this.http.get<MenuInterface[]>('./assets/data/menu.json');
  }
}
