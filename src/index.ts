import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import productsRoutes from './routes/productsRoutes';
import categoryRoutes from './routes/categoryRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }

    routes():void{
        this.app.use('/api/index', indexRoutes);
        this.app.use('/api/products', productsRoutes)
        this.app.use('/api/category', categoryRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();

server.start();