import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

const server = new Server();


// Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());




// Rutas de la aplicacion
server.app.use('/user', userRoutes);

// Conexion a la base de Datos
mongoose.connect('mongodb://localhost:27017/fotosgram', {useCreateIndex: true , useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});


// LEvantar el Servidor de Express
server.start(() => {
    console.log(`Servidor Conectado desde Puerto: ${server.port}`);
});