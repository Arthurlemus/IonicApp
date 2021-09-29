import { Component,OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/interface';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categorias = ['business','entertainment','general','health','science','sports','technology'];
  titulo: string;
  noticias: Article[] = [];

  constructor(private ns: NoticiasService ) {
      
  }
  
  ngOnInit(){
    this.getTopHeadLinesCategoria(this.categorias[0]);
  }
  
  cambioCategoria(event){
    this.getTopHeadLinesCategoria(event.detail.value);
  }

  getTopHeadLinesCategoria(categoria: string){
    this.titulo = categoria;
    this.ns.getTopHeadLinesCategoria(categoria).subscribe(resp => {
      console.log('Por Categoria', resp);
      this.noticias = resp.articles;
    });
  }



}
