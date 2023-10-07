import express from 'express';
import cors from 'cors';
import users from '../routes/user.js';


export class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users/'

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio publico
        this.app.use( express.static( 'public' ) );


    }

     routes () {
        //Este es un middleware condicional,
        //donde se le dice que se ejecute cuando se solicite cierto path
    this.app.use(this.userPath , users);
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server conectado al puerto ${ this.port }`);
        });
    }
}