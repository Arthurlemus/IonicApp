import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string;

  constructor(private alertCtrl: AlertController) { }
  
  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Welcome',
      message: 'Hi World',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertMultiple() {
    const alertMul = await this.alertCtrl.create({
      header: 'Deseas Viajar',
      message: 'Ten cuidado con tu <b>Respuesta</b>',
      backdropDismiss: false,
      buttons: [
        {text:'Cancelar', role: 'Cancel', handler: () => {console.log('Cancelando: '); } },
        {text: 'Ok', handler: () => {console.log('Ok Listo: '); } }

      ]
    });
    await alertMul.present();
  }

  async presentAlertInput() {
    const alertInput = await this.alertCtrl.create({
      header: 'Introduce tu Nombre:',
      inputs: [{name: 'nombre', type: 'text', placeholder: 'Your Name'}],
      buttons: [
        {text: 'Cancelar', role: 'Cancel', handler: ()=> {console.log('Cancelado'); } },
        {text: 'Guardar', handler: (datos) => {
          this.titulo = datos.nombre;
        }}
      ]
    });
    await alertInput.present();
  }

  ngOnInit() {
  }

}
