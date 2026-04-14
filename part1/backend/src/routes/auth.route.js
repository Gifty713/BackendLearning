import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers";
const router = Router();

router.post('/register').post(registerUser)
export default router; 