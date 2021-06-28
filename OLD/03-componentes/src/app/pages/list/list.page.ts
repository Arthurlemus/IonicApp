import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', {static: false}) lista: IonList;

  users: Observable<any>;
 
  constructor(private dataService: DataService, private toastCtrl: ToastController) {
    this.users = this.dataService.getUsers();
   }

  ngOnInit() {
  }

  borrar(user: any) {console.log('Borrado', user); this.msjToast('Item borrado'); this.lista.closeSlidingItems(); }
  share(user: any) {console.log('Share', user); this.msjToast('Compartido , Gracias'); this.lista.closeSlidingItems(); }
  favorite(user: any) {console.log('Favorite', user); this.msjToast('Agregado a Favoritos'); this.lista.closeSlidingItems(); }

  async msjToast(message: string) {
    const toast = await this.toastCtrl.create({
        message,
        duration:2000
    });
    toast.present();
  }
}
