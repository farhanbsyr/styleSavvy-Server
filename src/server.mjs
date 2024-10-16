import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// import routes
import authRoutes from "./routes/authRoutes.mjs";
import adminProductsRouter from "./routes/admin/productRoutes.mjs";
import adminOrderRouter from "./routes/admin/orderRoutes.mjs";
import shopCartRouter from "./routes/shop/cartRoutes.mjs";
import shopProductsRouter from "./routes/shop/productsRoutes.mjs";
import shopAddressRouter from "./routes/shop/addressRoutes.mjs";
import commonFeatureRouter from "./routes/common/featureRoutes.mjs";
mongoose
  .connect("mongodb+srv://clothingdb:clothingdb@cluster0.tugok.mongodb.net/")
  .then(() => {
    console.log("connected database");
  })
  .catch((err) => console.log(`Error: ${err}`));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);
// shop routes
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/address", shopAddressRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
