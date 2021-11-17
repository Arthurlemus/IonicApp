"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var mongoose_1 = require("mongoose");
var usuarioShema = new mongoose_1.Schema({
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
    password: {
        type: String,
        required: [true, 'La Contraseña es Necesaria']
    }
});
exports.Usuario = (0, mongoose_1.model)('Usuario', usuarioShema);
