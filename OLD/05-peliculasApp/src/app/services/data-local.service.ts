import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.cargarFavoritos();
   }

// ─────────────────────────────────────────────────────────────────────────────
  async toastmsj(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

// ─────────────────────────────────────────────────────────────────────────────
  guardarPelicula(pelicula: PeliculaDetalle) {
    let existe = false;
    let mensaje = '';

    // this.peliculas.find(peli => {
    //   if (peli.id === pelicula.id) {
    //      existe = true;
    //   }
    // });

    for ( let peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
         this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
         mensaje = 'Removido de Favoritos';
      } else {
        this.peliculas.push(pelicula);
        mensaje = 'Agregado a Favoritos';
      }

    this.toastmsj(mensaje);
    this.storage.set('peliculas', this.peliculas);
  }

// ─────────────────────────────────────────────────────────────────────────────
 async cargarFavoritos() {
    const peli = await this.storage.get('peliculas');
    this.peliculas = peli || []; // si es null adquiere un arreglo vacio
    return this.peliculas;
  }

// ─────────────────────────────────────────────────────────────────────────────
  async existePelicula(id) {
    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);
    return (existe) ? true : false;
  }
}
