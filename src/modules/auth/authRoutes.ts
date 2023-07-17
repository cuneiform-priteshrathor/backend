import { Router, Request, Response } from "express";
import controller from './authController';
const router = Router();
router.post('/login', controller.authLogin)
router.post('/register', controller.authRegister)
export default router;