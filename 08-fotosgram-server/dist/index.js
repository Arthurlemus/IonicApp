"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const server = new server_1.default();
// Rutas de App
server.app.use('/user', usuario_1.default);
//Conectar MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/fotosgram', (err) => {
    if (err)
        throw err;
    console.log('BD ONLINE');
});
//Levantar el Servidor
server.start(() => {
    console.log(`Puerto ${server.port} Funcional y a la escuchas`);
});
