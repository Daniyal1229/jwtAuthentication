import { Router } from "express";
import userRouter from "./userRoutes.js";

const appRouter = Router();

// let create routes for app
appRouter.use('/users',userRouter)

export default appRouter;
