import { Router } from "express";

import * as express from "express";
import { getPrecios} from '../controllers/cotizacion';

const cotizacionRouter = Router();

cotizacionRouter.use(express.json());
cotizacionRouter.post('/',getPrecios);
  
  
export { cotizacionRouter }





