import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
 fechaNac: Date = new Date();
 customPickerOptions: any;
 customDate;

  constructor() { 

  
}

  ngOnInit() {
    
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          console.log('Guardando....!');
          console.log(event);
        }
      }, {
        text: 'Olvidar',
        handler: () => {
          console.log('no se guarda.');
          return false;
        }
      }]
    };


  }

cambioFecha(event){
    console.log(event.detail.value);
  }
}
