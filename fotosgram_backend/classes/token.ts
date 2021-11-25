import jwt from 'jsonwebtoken';

export default class Token {
    private static seed: string = 'Seed-Cadena-Llave';
    private static caducidad: string = '30d';

    constructor(){}

// ─────────────────────────────────────────────────────────────────────────────
    static getJwtToken(payload: any){
        return jwt.sign({
            usuario: payload
        }, this.seed,{expiresIn: this.caducidad});
    }
    
// ─────────────────────────────────────────────────────────────────────────────
    static comprobarToken(userToken: string){
        return new Promise((resolve, reject) => {
            jwt.verify(userToken, this.seed, (err, userDB) => {
                if(err){
                    return false;
                }else{
                    return true;
                }
            });
        });
    }
}