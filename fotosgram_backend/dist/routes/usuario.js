"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioRouter = (0, express_1.Router)();
usuarioRouter.post('/create', function (req, res) {
    var user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
    };
    res.json({
        status: true,
        mensaje: 'Welcome to Webservice in Node.js',
        user: user
    });
});
exports.default = usuarioRouter;
