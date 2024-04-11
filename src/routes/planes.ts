import { Router } from "express";
import * as express from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem, searchItem  } from '../controllers/planes';

const planesRouter = Router();

planesRouter.use(express.json());
planesRouter.get('/',(req, res) => { getItems(req, res);});
planesRouter.get('/:id', (req, res) => { getItemById(req, res);});
planesRouter.post('/', (req, res) => {createItem(req, res) });
planesRouter.put('/:id', (req, res) => { updateItem(req, res)});
planesRouter.delete('/:id', (req, res) => { deleteItem(req, res)});
planesRouter.get('/search',(req, res) => {searchItem(req, res);
  });
 
export { planesRouter }


