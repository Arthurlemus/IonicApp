import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) ionInfinite: IonInfiniteScroll;
  data: any[] = Array(20)
  
  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      this.ionInfinite.complete();
      //event.target.complete();
      
      if(this.data.length > 50){
        this.ionInfinite.disabled = true;
      }
      
    }, 1500);
  }

}
