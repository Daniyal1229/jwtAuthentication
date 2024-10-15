import { Router } from "express";
import { validateSignup, validateLogin } from "../middleware/validate.js";
import { signup, login } from "../controllers/userSignup.js";
const userRouter = Router();

// signup routes
userRouter.post('/signup/',validateSignup,signup);
userRouter.post('/login/',validateLogin,login);

export default userRouter;