import { Router } from "express";

import * as express from "express";
import { fileUpload } from '../controllers/uploads';

const uploadsRouter = Router();


uploadsRouter.post('/', fileUpload);

export { uploadsRouter }

