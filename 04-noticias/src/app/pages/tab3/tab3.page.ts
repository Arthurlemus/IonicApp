import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/interface';
import { DataLocalService } from '../../services/data-local.service';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  noticias: Article[] = [];
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  constructor(private dataLocalService: DataLocalService, private ns: NoticiasService) {
     
  }
  
  ngOnInit(){
    this.cargarFavoritos();
    
  }
  
  async cargarFavoritos(){
    await this.dataLocalService.cargarFavoritos().then(() => {
       this.noticias = this.dataLocalService.noticias;
     });
   }


  

}
