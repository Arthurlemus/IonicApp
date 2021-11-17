import mongoose from 'mongoose';
import Server from './classes/server';
import usuarioRouter from './routes/usuario';
import bodyParser from 'body-parser';

const server = new Server();

//Body Parser para poder recibir datos POST
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//Rutas
server.app.use('/user', usuarioRouter);

//Conectar la BD
mongoose.connect('mongodb://localhost:27017/backendfotosgram', (err) => {
    if(err) throw err;
    console.log('BD ONLINE');
});

//Iniciar Servidor
server.start(() => {
    console.log(`Server Activado en puerto ${server.port}`);
});