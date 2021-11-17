import { Document, model, Schema } from "mongoose";
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El Nombre es Necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El Correo es Necesario']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    password:{
        type: String,
        required: [true, 'La Contraseña es Necesaria']
    }
});

usuarioSchema.method('compararPassword', function(password: string = ''): boolean{
    if(bcrypt.compareSync(password, this.password)){
        return true;
    }else{
        return false;
    }
});

interface IUsuario extends Document{
    nombre: string;
    email: string;
    avatar: string;
    password: string;
    compararPassword(password: string): boolean;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);