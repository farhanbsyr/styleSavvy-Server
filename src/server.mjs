import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.mjs";

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
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
