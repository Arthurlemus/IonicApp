import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  
  albunes: any[] = []; // almacena el arreglo de albunes
  textoBuscar: string = ''; // almacena el texto que se pone en el Search
  @ViewChild(IonSearchbar) ionSearch: IonSearchbar; // referencia al componente IonsearchBar

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getAlbunes().subscribe(albunes => {
        this.albunes = albunes;
      });
  }

  onSearchChange(){
    this.textoBuscar = this.ionSearch.value;
  }

}
