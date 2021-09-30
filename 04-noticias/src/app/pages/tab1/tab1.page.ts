import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  noticias: Article[] = [];

  constructor(private ns: NoticiasService) {}

// ─────────────────────────────────────────────────────────────────────────────
  ngOnInit(){
    this.cargarNoticias();
  }

// ─────────────────────────────────────────────────────────────────────────────
  loadData(event){
    this.cargarNoticias(event);
  }
  
// ─────────────────────────────────────────────────────────────────────────────
  cargarNoticias(event?){
    this.ns.getTopHeadLines().subscribe(resp =>{
      
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
