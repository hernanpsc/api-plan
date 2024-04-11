import { Request, Response, Router } from "express";
import { regsiterCtrl, loginCtrl } from "../controllers/auth";

const authRouter = Router();

/** http://localhost:3002/auth/register [POST] */

authRouter.post("/register",regsiterCtrl);
authRouter.post("/login",loginCtrl);

export { authRouter } 