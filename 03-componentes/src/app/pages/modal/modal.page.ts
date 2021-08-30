import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      backdropDismiss: false,
      mode: 'ios',
      componentProps: {
        nombre: 'Irving',
        pais: 'Mexico'
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data){
      console.log(data);
    }
  }

}
