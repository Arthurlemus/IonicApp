import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
 data: any = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando lista.....');
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    });
  }

}
