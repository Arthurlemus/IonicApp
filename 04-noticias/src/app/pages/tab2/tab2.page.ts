import { Component,OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/interface';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
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

  loadData(event){
    this.cargarNoticias(this.titulo, event);
  }

// ─────────────────────────────────────────────────────────────────────────────    
  cambioCategoria(event){
    this.noticias = [];
    this.infinite.disabled = false;
    this.cargarNoticias(event.detail.value);
  }

// ─────────────────────────────────────────────────────────────────────────────  
  cargarNoticias(categoria: string, event?){
    this.titulo = categoria;
    this.ns.getTopHeadLinesCategoria(categoria).subscribe(resp => {
  
      if(resp.articles.length === 0){
        event.target.complete();
        event.target.disabled = true;
      }else{
        this.noticias.push(...resp.articles);
        if(event){
          event.target.complete();   
        } 
      }
    });
  }



}
