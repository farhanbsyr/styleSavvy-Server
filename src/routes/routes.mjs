import { Router } from "express";
import authRoutes from "./authRoutes.mjs";
const router = Router();

router.use(authRoutes);

export default router;
