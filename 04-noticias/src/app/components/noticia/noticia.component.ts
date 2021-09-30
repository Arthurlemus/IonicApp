import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../pages/interfaces/interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  
  @Input() noticia: Article;
  @Input() num: number;

  constructor(private iab: InAppBrowser, private actionCtrl: ActionSheetController) { }

  ngOnInit() {}

  abrirNoticia(){
    const navegador = this.iab.create(this.noticia.url, '_system');
    navegador.show();
  }

  async lanzarMenu() {
    const actionSheet = await this.actionCtrl.create({
      header: 'Albums',
      buttons: [{
        text: 'Share',
        icon: 'share',
        cssClass:'action-dark',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Favorite',
        icon: 'heart',
        cssClass:'action-dark',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass:'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}

