import { Document, model, Schema } from "mongoose";

const usuarioShema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El Nombre es Necesario']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El Correo es Necesario']
    },
    password:{
        type: String,
        required: [true, 'La Contraseña es Necesaria']
    }
});

interface IUsuario extends Document{
    nombre: string;
    avatar: string;
    email: string;
    password: string;
}

export const Usuario = model<IUsuario>('Usuario', usuarioShema);