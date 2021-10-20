import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../pages/interfaces/interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, ToastController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  
  @Input() noticia: Article;
  @Input() num: number;
  @Input() enFavoritos: boolean;

  constructor(private iab: InAppBrowser, private actionCtrl: ActionSheetController, private socialSharing: SocialSharing,
    private dataLocalService: DataLocalService, private  toastCtrl: ToastController, private platform: Platform) { }

  ngOnInit() {}

  abrirNoticia(){
    const navegador = this.iab.create(this.noticia.url, '_system');
    navegador.show();
  }

  async lanzarMenu() {
      
    let btnFavoritosBorrar;
    
    if(this.enFavoritos){
      
      btnFavoritosBorrar = {
        text: 'Borrar',
        icon: 'trash',
        cssClass:'action-dark',
        handler: () => {
          this.dataLocalService.borrarNoticia(this.noticia);
        }
      }

    }else{
      btnFavoritosBorrar = {
        text: 'Favoritos',
        icon: 'heart',
        cssClass:'action-dark',
        handler: () => {
          this.dataLocalService.guardarNoticia(this.noticia);
        }
      }
    }

    const actionSheet = await this.actionCtrl.create({
      header: 'Albums',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass:'action-dark',
        handler: () => {
          this.compartirNoticia();
        }
      },
      btnFavoritosBorrar, 
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass:'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    //const { role } = await actionSheet.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  compartirNoticia(){
    if(this.platform.is("cordova")){
      this.socialSharing.share(this.noticia.title, this.noticia.source.name, null, this.noticia.url);
    }else{
      if (navigator.share) {
        navigator.share({
          title: this.noticia.title,
          text: this.noticia.description,
          url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }else{
        console.log('No se puede compartir');
      }
    }

  }





}

