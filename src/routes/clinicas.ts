import { Router } from "express";
import * as express from "express";
import { getItems, getItemById, createItem, updateItem, deleteItem, searchItem  } from '../controllers/clinicas';
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const clinicasRouter = Router();

clinicasRouter.use(express.json());
clinicasRouter.get('/',(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => { getItems(req, res);});
clinicasRouter.get('/:id', (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => { getItemById(req, res);});
clinicasRouter.post('/', (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => {createItem(req, res ) });
clinicasRouter.put('/:id', (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => { updateItem(req, res )});
clinicasRouter.delete('/:id', (req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => { deleteItem(req, res )});
clinicasRouter.get('/search',(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) => {searchItem(req, res);
  });
 
export { clinicasRouter }


