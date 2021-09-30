import { Component,OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/interface';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  categorias = ['business','entertainment','general','health','science','sports','technology'];
  titulo: string;
  noticias: Article[] = [];

// ─────────────────────────────────────────────────────────────────────────────  
  constructor(private ns: NoticiasService ) {
      
  }

// ─────────────────────────────────────────────────────────────────────────────  
  ngOnInit(){
    this.cargarNoticias(this.categorias[0]);
  }

// ─────────────────────────────────────────────────────────────────────────────    
  cambioCategoria(event){
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

// ─────────────────────────────────────────────────────────────────────────────  
  cargarNoticias(categoria: string){
    this.titulo = categoria;
    this.ns.getTopHeadLinesCategoria(categoria).subscribe(resp => {
      console.log('Por Categoria', resp);
      this.noticias.push(...resp.articles);
    });
  }



}
