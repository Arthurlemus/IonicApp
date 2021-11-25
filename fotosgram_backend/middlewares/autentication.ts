import { NextFunction } from 'express';

export const verificaToken = (req: any, res:any, next: NextFunction) => {
    const userToken = req.get('x-token') || '';
}