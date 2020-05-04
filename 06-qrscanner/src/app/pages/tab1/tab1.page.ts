import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private barcodeScaner: BarcodeScanner, private dataLocal: DataLocalService) {}

// ─────────────────────────────────────────────────────────────────────────────
  ionViewWillEnter() {
    this.scan();
  }

// ─────────────────────────────────────────────────────────────────────────────
  scan() {
    this.barcodeScaner.scan().then(barcode => {
      console.log('Data Code', barcode);
      if (!barcode.cancelled) {
        this.dataLocal.guardarRegistro(barcode.format, barcode.text);
      }
    }).catch(err => {
      console.log('Error: ', err);
      // this.dataLocal.guardarRegistro('QRCode', 'https://www.tecnola.com.mx');
      this.dataLocal.guardarRegistro('QRCode', 'geo:20.690745,-103.296011');
    });
  }
}
