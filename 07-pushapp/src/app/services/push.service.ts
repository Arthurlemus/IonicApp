import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }
    
  
  configuracionInicial(){
    this.oneSignal.startInit('e2cac5f4-1fe7-4ef8-95c1-980430ec8c60', '593079079179');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
         console.log('Notificacion Recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
        console.log('Notificacion Abierta', noti);
    });

this.oneSignal.endInit();
  }


}
