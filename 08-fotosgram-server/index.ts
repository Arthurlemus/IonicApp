import mongoose from 'mongoose';
import Server  from './classes/server';
import usuarioRoutes from './routes/usuario';
import bodyParser from 'body-parser';

const server = new Server();

//Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// Rutas de App
server.app.use('/user', usuarioRoutes);


//Conectar MongoDB
mongoose.connect('mongodb://localhost:27017/fotosgram' , (err) =>{
    if(err) throw err;
    console.log('BD ONLINE');
});


//Levantar el Servidor
server.start(() => {
    console.log(`Puerto ${server.port} Funcional y a la escuchas`)
});
