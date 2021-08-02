import { Component, OnInit } from '@angular/core';
import { PickerOptions } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNac: Date;
  
  customOptions = {
    buttons: [
      {text: 'Hola', handler: (event)=>{console.log(event)}},
      {text:'Mundo'}
    ]
  }
  customYearValues = [2025,2021,2020, 2016, 2008, 2004, 2000, 1996];

  constructor() { 
    this.fechaNac = new Date();
  }

  ngOnInit() {
  }

  cambiarFecha(event){
    console.log(new Date(event.detail.value));
  }

}
