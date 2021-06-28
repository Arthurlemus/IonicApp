import {Schema, Document, model} from 'mongoose';
import bcrypt from 'bcrypt';

// Campos que tendra la tabla
const usuarioShema = new Schema({
    nombre: {type: String, required: [true, 'Es necesario Introducir el nombre']},
    avatar: {type: String, default: 'av-1.png'},
    email: {type: String, unique: true , required: [true, 'Es necesario el Correo Electronico']},
    password: {type: String, required: [true, 'Es necesario un Password']} 
});

// Modelo Personalizado
usuarioShema.method('compararPassword', function(password: string = ''): boolean{
    if (bcrypt.compareSync(password, this.password)) {
        return true;
    }else{
        return false;
    }
});


// Para especificar la interaz del modelo
interface IUsuario extends Document {
    nombre: string;
    avatar: string;
    email: string;
    password: string;

    compararPassword(password:string):boolean;
    
}

// Se exporta la Variable con el tipo de interface y modelo
export const Usuario = model<IUsuario>('Usuario', usuarioShema);
