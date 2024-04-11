import { Router } from "express";
import * as express from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem, searchItem  } from '../controllers/cotizaciones';

const cotizacionesRouter = Router();

cotizacionesRouter.use(express.json());
cotizacionesRouter.get('/',(req, res) => { getItems(req, res);});
cotizacionesRouter.get('/:id', (req, res) => { getItemById(req, res);});
cotizacionesRouter.post('/', (req, res) => {createItem(req, res ) });
cotizacionesRouter.put('/:id', (req, res) => { updateItem(req, res )});
cotizacionesRouter.delete('/:id', (req, res) => { deleteItem(req, res )});
cotizacionesRouter.get('/search',(req, res) => {searchItem(req, res);
  });
 
export { cotizacionesRouter }


