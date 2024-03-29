"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var usuarioSchema = new mongoose_1.Schema({
    nombre: {
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
    password: {
        type: String,
        required: [true, 'La Contraseña es Necesaria']
    }
});
usuarioSchema.method('compararPassword', function (password) {
    if (password === void 0) { password = ''; }
    if (bcrypt_1.default.compareSync(password, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
