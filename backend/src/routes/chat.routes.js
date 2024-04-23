import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";

const router = Router();

router.get('/',authRequired)