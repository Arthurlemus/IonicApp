import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial() {
    this.oneSignal.startInit('fb7acac7-1413-46c7-adb0-f06d21a958b5', '134045989958');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
         // do something when notification is received
         console.log('Notificacion Recibida: ', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
        // do something when a notification is opened
        console.log('Notificacion Abierta', noti);
    });

    this.oneSignal.endInit();
  }
}
