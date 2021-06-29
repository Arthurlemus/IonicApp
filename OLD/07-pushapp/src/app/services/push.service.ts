import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: OSNotificationPayload[] = [];

  pushListener = new EventEmitter<OSNotificationPayload>();

  userID: string;

  constructor(private oneSignal: OneSignal, 
              private storage: Storage) { 
                this.cargarMensajes();
              }

// ─────────────────────────────────────────────────────────────────────────────
  configuracionInicial() {
    this.oneSignal.startInit('fb7acac7-1413-46c7-adb0-f06d21a958b5', '134045989958');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
         // do something when notification is received
         console.log('Notificacion Recibida: ', noti);
         this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async(noti) => {
        // do something when a notification is opened
        console.log('Notificacion Abierta', noti);
        await this.notificacionRecibida(noti.notification);
    });

    this.oneSignal.getIds().then(info =>{
      this.userID = info.userId;
    });

    this.oneSignal.endInit();
  }
  
// ─────────────────────────────────────────────────────────────────────────────
  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }
// ─────────────────────────────────────────────────────────────────────────────
  async notificacionRecibida(noti: OSNotification) {
    await this.cargarMensajes();
    
    const payload = noti.payload;
    const existePush = this.mensajes.find(msj => msj.notificationID === payload.notificationID);
    
    if ( existePush) {
      return;
    }
    
    this.mensajes.unshift(payload);
    this.pushListener.emit(payload);

    this.guardarMensajes();
  }

// ─────────────────────────────────────────────────────────────────────────────
  guardarMensajes() {
    this.storage.set('mensajes', this.mensajes);
  }

// ─────────────────────────────────────────────────────────────────────────────
  async cargarMensajes() {
    this.mensajes = await this.storage.get('mensajes') || [];
  }
  
// ─────────────────────────────────────────────────────────────────────────────
  borrarNoti() {
    this.storage.clear();
  }
}
