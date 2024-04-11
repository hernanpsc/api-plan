import { Request, Response, Router } from "express"
import { getFile } from "../controllers/upload";
import  multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const uploadRouter = Router();

uploadRouter.post("/", checkJwt, multerMiddleware.single("myFile"), getFile ); //myFile  nombre del campo por el que hago la peticion http

export { uploadRouter }
