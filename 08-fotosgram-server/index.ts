import Server from './classes/server';

const server = new Server();

server.start(() => {
    console.log(`Servidor A la escucha en el puerto ${server.port}`);
});