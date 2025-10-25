import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import geminiRoutes from "./routes/gemini.routes.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Allow specifying the frontend URL via env (set this on Render to your frontend URL)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// MIDDLEWARES 
app.use(express.json()); // parse JSON body
app.use(cookieParser()); // parse cookies
app.use(
  cors({
    origin: FRONTEND_URL, // frontend URL (read from FRONTEND_URL env var)
    credentials: true, // allow cookies/auth
  })
);

// ROUTES 
app.use("/api/gemini", geminiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
 app.get("/health", (req, res) => {
   res.status(200).json({ status: "OK", message: "Server is healthy" });
 });

// PRODUCTION STATIC FILES 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// START SERVER 
server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
  connectDB();
});
