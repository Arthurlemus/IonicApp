import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatalocalService } from '../../services/datalocal.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
 @Input() noticia: Article;
 @Input() index: number;
 @Input() enFavoritos: boolean;


 constructor(private iab: InAppBrowser, private actionSheetCtrl: ActionSheetController, 
             private socialSharing: SocialSharing, private datalocalService: DatalocalService,
             private platform: Platform) { }

  ngOnInit() {
  }

  abrirNoticia() {
      this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {
    
    let agregarBorrarFavorito;

    if (this.enFavoritos){
      agregarBorrarFavorito = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
           this.datalocalService.borrarNoticia(this.noticia);
        }
      };
    } else {
      agregarBorrarFavorito = {
        text: 'Favorito',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.guardarFavoritos(this.noticia);
        }
      };
    }

    const sheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [{
        text: 'Compartir',

        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          this.compartirNoticia();
        }
      },
        agregarBorrarFavorito
      , {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await sheet.present();
  }
  
  compartirNoticia(){
    if (this.platform.is('cordova')) {
      this.socialSharing.share(this.noticia.title, this.noticia.source.name, '', this.noticia.url);
    } else {
      // tslint:disable-next-line: no-string-literal
      if (navigator['share']) {
        // tslint:disable-next-line: no-string-literal
        navigator['share']({
          title: 'web.dev',
          text: 'Check out web.dev.',
          url: 'https://web.dev/',
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('No soporta la opcion de compartir');
      }
    }
  }
}
