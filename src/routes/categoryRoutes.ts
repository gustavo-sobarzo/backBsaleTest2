import { Router } from 'express';
import {categoryController } from '../controllers/categoryController';


class CategoryRoutes{

    public router:Router = Router(); 

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', categoryController.categoryIndex)
    }
    
}

const categoryRoutes = new CategoryRoutes();

export default categoryRoutes.router;
