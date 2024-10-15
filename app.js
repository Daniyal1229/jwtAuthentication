import express from "express";
import appRouter from "./routes/appRoute.js";
const app = express();

// middlewares
app.use(express.json());

// lets mount the routes
app.use('/auth/v1/api',appRouter)

export default app;