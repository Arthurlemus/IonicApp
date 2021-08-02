import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
   favorito: boolean;
  
   constructor() { 
     this.favorito = false;
   }

  ngOnInit() {
  }

  onClick(){
    this.favorito = !this.favorito;
  }

}
