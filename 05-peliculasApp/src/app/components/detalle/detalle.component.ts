import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Actores } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: string;
  pelicula: PeliculaDetalle = {};
  actores: Actores[] = [];
  caracteres = 150;
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private modalCtrl: ModalController, private moviesService: MoviesService) { }

  // ─────────────────────────────────────────────────────────────────────────────
  ngOnInit() {
      this.getPeliculaDetalle();
      this.getActoresPelicula();
  }

// ─────────────────────────────────────────────────────────────────────────────
  cerrarModal() {
    this.modalCtrl.dismiss();
  }

// ─────────────────────────────────────────────────────────────────────────────
  getPeliculaDetalle() {
    this.moviesService.getPeliculaDetalle(this.id).subscribe(resp => {
      console.log(resp);
      this.pelicula = resp;
    });
  }

// ─────────────────────────────────────────────────────────────────────────────
  getActoresPelicula() {
    this.moviesService.getActoresPelicula(this.id).subscribe(resp => {
        console.log('Actoressss', resp);
        this.actores = resp.cast;
    });
  }

// ─────────────────────────────────────────────────────────────────────────────
  favorito() {}
}
