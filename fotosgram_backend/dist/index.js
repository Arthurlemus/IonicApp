"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var server_1 = __importDefault(require("./classes/server"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var body_parser_1 = __importDefault(require("body-parser"));
var server = new server_1.default();
//Body Parser para poder recibir datos POST
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Rutas
server.app.use('/user', usuario_1.default);
//Conectar la BD
mongoose_1.default.connect('mongodb://localhost:27017/backendfotosgram', function (err) {
    if (err)
        throw err;
    console.log('BD ONLINE');
});
//Iniciar Servidor
server.start(function () {
    console.log("Server Activado en puerto " + server.port);
});
