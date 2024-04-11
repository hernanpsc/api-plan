import { Router } from "express";
import * as express from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem, searchItem  } from '../controllers/empresas';

const empresasRouter = Router();

empresasRouter.use(express.json());
empresasRouter.get('/',(req, res) => { getItems(req, res);});
empresasRouter.get('/:id', (req, res) => { getItemById(req, res);});
empresasRouter.post('/', (req, res) => {createItem(req, res) });
empresasRouter.put('/:id', (req, res) => { updateItem(req, res)});
empresasRouter.delete('/:id', (req, res) => { deleteItem(req, res)});
empresasRouter.get('/search',(req, res) => {searchItem(req, res);
  });
 
export { empresasRouter }


