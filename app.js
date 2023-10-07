import env from 'dotenv';
env.config(); // carga el contenido del archivo .env
import {
    Server
} from './models/server.js';


const server = new Server();
server.routes()
server.listen();