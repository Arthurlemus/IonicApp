"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_model_1 = require("../models/usuario.model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var token_1 = __importDefault(require("../classes/token"));
var autentication_1 = require("../middlewares/autentication");
var usuarioRoutes = express_1.Router();
//Login
usuarioRoutes.post('/login', function (req, res) {
    var body = req.body;
    usuario_model_1.Usuario.findOne({ email: body.email }, function (err, userDB) {
        if (err)
            throw err;
        // Si no encuentra ningun usuario
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario/Contraseña no son correctos'
            });
        }
        //Compara el password puesto con el de la BD
        if (userDB.compararPassword(body.password)) {
            var userToken = token_1.default.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                avatar: userDB.avatar,
                email: userDB.email
            });
            res.json({
                ok: true,
                token: userToken
            });
        }
        else {
            res.json({
                ok: false,
                mensaje: 'Usuario/Contraseña no son correctos'
            });
        }
    });
});
//Crear un Usuario
usuarioRoutes.post('/create', function (req, res) {
    var user = {
        nombre: req.body.nombre,
        email: req.body.email,
        avatar: req.body.avatar,
        password: bcrypt_1.default.hashSync(req.body.password, 10)
    };
    usuario_model_1.Usuario.create(user).then(function (userDB) {
        var userToken = token_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            avatar: userDB.avatar,
            email: userDB.email
        });
        res.json({
            ok: true,
            mensaje: 'Registro Exitoso',
            user: userDB,
            token: userToken
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
//Actualizar Usuario
usuarioRoutes.post('/update', autentication_1.verificaToken, function (req, res) {
    var user = {
        nombre: req.body.nombre,
        email: req.body.email,
        avatar: req.body.avatar,
    };
    console.log('USER', user);
    usuario_model_1.Usuario.findByIdAndUpdate(req.usuario._id, user, { new: true }, function (err, userDB) {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'No existe un Usuario con ese ID'
            });
        }
        var userToken = token_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            avatar: userDB.avatar,
            email: userDB.email
        });
        res.json({
            ok: true,
            mensaje: 'Datos Actualizados',
            usuarioOLD: req.usuario,
            usuarioNEW: userDB,
            token: userToken
        });
    });
});
exports.default = usuarioRoutes;
