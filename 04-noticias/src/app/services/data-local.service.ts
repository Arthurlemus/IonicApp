import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../pages/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  
  noticias: Article[] = [];

  constructor(private storage: Storage) { 
    storage.create();
  }

  guardarNoticia(noticia: Article){
      const existe = this.noticias.find(noti => noti.title === noticia.title);
      
      if(!existe){
        this.noticias.unshift(noticia);
        this.storage.set('favoritos', this.noticias);
      }else{
        console.log('Noticia ya Registrada');
      }
  }

  async cargarFavoritos(){
    if(await this.storage.get('favoritos')){
      this.noticias = await this.storage.get('favoritos');
    }
  
  }
}
