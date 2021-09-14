import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuInterface } from '../interface/menu.interface';
import { delay } from 'rxjs/operators';

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
 
  getHeroes(){
    return this.http.get<any[]>('./assets/data/superheroes.json').pipe(delay(2500));
  }

  getAlbunes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
