import { Router, Request, Response } from "express";
import userRoutes from '../modules/user/userRoutes';
import authRoutes from '../modules/auth/authRoutes';
const router = Router();

router.use('/api/user', userRoutes)
router.use('/api/auth', authRoutes);
export default router;