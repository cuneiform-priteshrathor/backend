import { Router, Request, Response } from "express";
const router = Router();
import controller from "./userController";
import authCheck from "../../middleware/authCheck";
router.post('/add', controller.addUser)
router.get('/getUser', controller.getUser)
router.get('/getUser/:id', controller.getUserId)
router.put('/updateUser/:id', controller.updateUser)
router.delete('/deleteUser/:id', controller.deleteUserId)
export default router;