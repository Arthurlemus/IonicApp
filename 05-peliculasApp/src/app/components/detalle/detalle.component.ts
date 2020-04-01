import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: string;

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
    });
  }

// ─────────────────────────────────────────────────────────────────────────────
  getActoresPelicula() {
    this.moviesService.getActoresPelicula(this.id).subscribe(resp => {
        console.log(resp);
    });
  }
}
