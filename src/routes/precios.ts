import { Router } from "express";
import * as express from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem, searchItem  } from '../controllers/precios';

const preciosRouter = Router();

preciosRouter.use(express.json());
preciosRouter.get('/',(req, res) => { getItems(req, res);});
preciosRouter.get('/:id', (req, res) => { getItemById(req, res);});
preciosRouter.post('/', (req, res) => {createItem(req, res) });
preciosRouter.put('/:id', (req, res) => { updateItem(req, res)});
preciosRouter.delete('/:id', (req, res) => { deleteItem(req, res)});
preciosRouter.get('/search',(req, res) => {searchItem(req, res);
  });
 
export { preciosRouter }


