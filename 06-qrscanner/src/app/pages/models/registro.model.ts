export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.created = new Date();

        this.determinarTipo();
    }

   private determinarTipo() {
        const inicioTexto = this.text.substring(0, 4);
        console.log('Tipo Scan', inicioTexto);

        switch (inicioTexto) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;

            case 'geo:':
                this.type = 'geo';
                this.icon = 'compass';
                break;

            default: 
                this.type = 'No Reconocido';
                this.icon = 'barcode';
                break;
        }

    }
}