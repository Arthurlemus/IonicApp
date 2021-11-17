"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioRoutes = express_1.Router();
usuarioRoutes.get('/prueba', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Conexion Exitosa'
    });
});
exports.default = usuarioRoutes;
