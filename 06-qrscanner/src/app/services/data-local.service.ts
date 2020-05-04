import { Injectable } from '@angular/core';
import { Registro } from '../pages/models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  guardados: Registro[] = [];

  constructor(private storage: Storage, private navCtrl: NavController, private iab: InAppBrowser, private file: File, 
              private emailComposer: EmailComposer) {
    this.cargarStorage();
  }

// ─────────────────────────────────────────────────────────────────────────────
  async guardarRegistro(format: string, text: string) {
    await this.cargarStorage();

    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    this.guardarStorage();
  }

// ─────────────────────────────────────────────────────────────────────────────
   guardarStorage() {
    this.storage.set('codigos', this.guardados);
  }

// ─────────────────────────────────────────────────────────────────────────────
  async cargarStorage() {
    let codigos = await this.storage.get('codigos');
    this.guardados = codigos || [];
  }

// ─────────────────────────────────────────────────────────────────────────────
  abrirRegistros(registro: Registro) {
      this.navCtrl.navigateForward('/tabs/tab2');
      console.log(registro);

      switch (registro.type) {
        case 'http':
          this.iab.create(registro.text, '_system');
          break;

        case 'geo':
          this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`);
          break;
      }

  }

// ─────────────────────────────────────────────────────────────────────────────
  enviarPorCorreo() {
    const titulos = 'Tipo, Formato, Creado en, Texto\n'; // Columnas del Csv
    let arreglo = [];
    arreglo.push(titulos);

    this.guardados.forEach(registro => {
        let row = `${registro.type}, ${registro.format}, ${registro.created}, ${registro.text.replace(',', ' ')}\n`; // Filas del Csv
        arreglo.push(row);
    });
    // console.log(arreglo);
    this.crearArchivoFisico(arreglo.join(' '));
  }

// ─────────────────────────────────────────────────────────────────────────────
  crearArchivoFisico(texto: string) {
    this.file.checkFile(this.file.externalDataDirectory, 'registros.csv').then(existe => {
      return this.escribirEnArchivo(texto);

    }).catch(err => {
      this.file.createFile(this.file.externalDataDirectory, 'registros.csv', false).then(creado => this.escribirEnArchivo(texto)).catch(err2 => console.log('No se Pudo Crear el Archivo', err2) );
    });
  }

// ─────────────────────────────────────────────────────────────────────────────
  async escribirEnArchivo(texto: string) {
     await this.file.writeExistingFile(this.file.externalDataDirectory, 'registros.csv', texto).then(write =>{
        let archivo = `${this.file.externalDataDirectory}registros.csv`;
       // console.log('RUTA', archivo);
        const email = {
          to: 'arthurlemus@tecnola.com.mx',
          // cc: 'erika@mustermann.de',
          // bcc: ['john@doe.com', 'jane@doe.com'],
          attachments: [
            archivo
          ],
          subject: 'Scaneos',
          body: 'Estos Son los Escaneos Realizados',
          isHtml: true
        };
        this.emailComposer.open(email);
        // console.log('Archivos enviados');
     });
  }
}
