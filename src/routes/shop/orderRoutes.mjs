import { Router } from "express";
import {
  createOrder,
  capturePayment,
} from "../../controllers/shop/orderController.mjs";

const router = Router();

router.post("/create", createOrder);
router.post("/capture", capturePayment);

export default router;
