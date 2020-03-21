import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  noticia: Article[] = [];
  constructor(private storage: Storage) { }

  guardarNoticia( noticia: Article) {
    
  }

  cargarNoticia() {
    //
  }
}
