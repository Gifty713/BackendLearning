import { Router } from "express";
import {registerUser, loginUser, logOut} from "../controllers/auth.controllers.js";
const userRouter = Router();

userRouter.route("/register").post(registerUser)

userRouter.route("/login").post(loginUser)

userRouter.route("/logout").post(logOut)
export default userRouter; 