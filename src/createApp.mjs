import express from "express";
import cookieParser from "cookie-parser";

export function createApp() {
  const app = express();

  app.use(cookieParser);
  app.use(express.json());

  return app;
}
