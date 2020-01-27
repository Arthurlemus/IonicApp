import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', {static: false}) lista: IonList;

  users: Observable<any>;
 
  constructor(private dataService: DataService) {
    this.users = this.dataService.getUsers();
   }

  ngOnInit() {
  }
  borrar(user: any) {console.log('Borrar', user); this.lista.closeSlidingItems(); }
  share(user: any) {console.log('Share', user); this.lista.closeSlidingItems(); }
  favorite(user: any) {console.log('Favorite', user); this.lista.closeSlidingItems(); }
}
