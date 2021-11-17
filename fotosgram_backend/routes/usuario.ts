import {Router, Request, Response} from 'express';

const usuarioRouter = Router();

usuarioRouter.post('/create', (req: Request, res: Response) =>{
    
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
    };
    
    res.json({
        status: true,
        mensaje: 'Welcome to Webservice in Node.js',
        user
    });
});

export default usuarioRouter;