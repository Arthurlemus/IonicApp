import { Request, Response, Router } from "express";

const usuarioRoutes = Router();

usuarioRoutes.get('/prueba', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Conexion Exitosa'
    });
});

export default usuarioRoutes;