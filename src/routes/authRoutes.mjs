import { Router } from "express";
import {
  authMiddleware,
  loginController,
  logoutController,
  registerController,
} from "../controllers/auth/authController.mjs";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user",
    user,
  });
});
export default router;
