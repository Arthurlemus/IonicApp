import { Request, Response, Router } from "express";
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from '../classes/token';
import { verificaToken } from '../middlewares/autentication';

const usuarioRoutes = Router();

//Login
usuarioRoutes.post('/login', (req: Request, res: Response) =>{
    const body = req.body;

    Usuario.findOne({email: body.email}, (err, userDB) =>{
        if(err) throw err;
            
        // Si no encuentra ningun usuario
        if(!userDB){
            return res.json({
                ok: false,
                mensaje: 'Usuario/Contraseña no son correctos'
            });
        }
        
        //Compara el password puesto con el de la BD
        if(userDB.compararPassword(body.password)){

            const userToken = Token.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                avatar: userDB.avatar,
                email: userDB.email
            });

            res.json({
                ok: true,
                token: userToken
            });
            
        }else{
            res.json({
                ok: false,
                mensaje: 'Usuario/Contraseña no son correctos'
            });
        }

    });
});



//Crear un Usuario
usuarioRoutes.post('/create', (req: Request, res: Response) => {
    
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        avatar: req.body.avatar,
        password: bcrypt.hashSync(req.body.password, 10)
    }

    Usuario.create(user).then(userDB =>{
        
        const userToken = Token.getJwtToken({
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

    }).catch(err => {

        res.json({
            ok: false,
            err
        });

    });
    
});


//Actualizar Usuario
usuarioRoutes.post('/update', verificaToken, (req: any, res: Response) => {

    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        avatar: req.body.avatar,
    }

    console.log('USER', user);

    Usuario.findByIdAndUpdate(req.usuario._id, user, {new: true}, (err, userDB) => {
        if(err) throw err;

        if(!userDB){
            return res.json({
                ok: false,
                mensaje: 'No existe un Usuario con ese ID'
            });
        }

        const userToken = Token.getJwtToken({
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

export default usuarioRoutes;