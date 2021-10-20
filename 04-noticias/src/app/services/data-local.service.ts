import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../pages/interfaces/interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  
  noticias: Article[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) { 
    storage.create();
  }

  guardarNoticia(noticia: Article){
      const existe = this.noticias.find(noti => noti.title === noticia.title);
      
      if(!existe){
        this.noticias.unshift(noticia);
        this.storage.set('favoritos', this.noticias);
        this.avisoToast('Noticia Agregada a Favoritos');
      }else{
        this.avisoToast('Noticia ya Registrada');
      }
  }

  async cargarFavoritos(){
    if(await this.storage.get('favoritos')){
      this.noticias = await this.storage.get('favoritos');
    }
  
  }

  borrarNoticia(noticia: Article){
    this.noticias = this.noticias.filter(noti => noti.title !== noticia.title);
    this.storage.set('favoritos', this.noticias);
    this.avisoToast('Noticia Borrada de Favoritos');
  }

  async avisoToast(mensaje: string){
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      animated: true
    });

    await toast.present();
  }
}
