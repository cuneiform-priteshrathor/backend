import { Router, Request, Response } from "express";
const router = Router();
import controller from "./userController";
import authCheck from "../../middleware/authCheck";
router.post('/add', authCheck, controller.addUser)
router.get('/getUser', authCheck, controller.getUser)
router.get('/getUser/:id', authCheck, controller.getUserId)
router.put('/updateUser/:id', authCheck, controller.updateUser)
router.delete('/deleteUser/:id', authCheck, controller.deleteUserId)
export default router;