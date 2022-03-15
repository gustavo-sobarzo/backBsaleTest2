import { Request, Response } from 'express';
import pool from '../database'
import { categoryController } from './categoryController';


class ProductsController{
    public async productsIndex (req:Request, res:Response){
        const {id} = req.params;
        const Allproducts = await pool.query('SELECT * FROM product WHERE category = ?', [id]); 
        res.json(Allproducts);
        console.log(Allproducts);
    }
}
 
export const productsController = new ProductsController();

