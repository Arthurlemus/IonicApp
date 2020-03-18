import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  categorias = ['business', 'entertainment', 'general', 'health', 'cience', 'sports', 'technology'];
  noticias: Article[] = [];

  @ViewChild(IonSegment,{static: true}) segment: IonSegment;
  
  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
   this.cargarNoticias(this.categorias[0]);
  }

  cambiocategoria(event){
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string){
    this.noticiasService.getTopHeadlinesCategoria(categoria)
    .subscribe(resp =>{
      this.noticias.push(...resp.articles);
    });
  }


}
