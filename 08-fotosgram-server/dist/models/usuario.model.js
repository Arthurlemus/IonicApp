"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
// Campos que tendra la tabla
const usuarioShema = new mongoose_1.Schema({
    nombre: { type: String, required: [true, 'Es necesario Introducir el nombre'] },
    avatar: { type: String, default: 'av-1.png' },
    email: { type: String, unique: true, required: [true, 'Es necesario el Correo Electronico'] },
    password: { type: String, required: [true, 'Es necesario un Password'] }
});
// Modelo Personalizado
usuarioShema.method('compararPassword', function (password = '') {
    if (bcrypt_1.default.compareSync(password, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
// Se exporta la Variable con el tipo de interface y modelo
exports.Usuario = mongoose_1.model('Usuario', usuarioShema);
