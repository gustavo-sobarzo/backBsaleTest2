import { Request, Response } from 'express';
import pool from '../database'


class CategoryController{
    public async categoryIndex(req: Request, res:Response){
        const allCategory = await pool.query('SELECT * FROM category');
        res.json(allCategory);
    }
}

export const categoryController = new CategoryController();