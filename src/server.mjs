import mongoose from "mongoose";
import { createApp } from "./createApp.mjs";
import cors from "cors";
mongoose
  .connect("mongodb+srv://clothingdb:clothingdb@cluster0.tugok.mongodb.net/")
  .then(() => {
    console.log("connected database");
  })
  .catch((err) => console.log(`Error: ${err}`));

const app = createApp();
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

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
