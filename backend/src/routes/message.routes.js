import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createMessage,getMessage,updateMessage } from "../controllers/message.controller.js";

const router = Router();

router.post('/',authRequired,createMessage);
router.get('/',authRequired,getMessage);
router.put('/',authRequired,updateMessage);

export default router;