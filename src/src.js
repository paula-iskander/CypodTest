import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import deviceRoutes from "./routes/devices.js";
import http from "http";
dotenv.config();

const app = express();
const server =http.Server(app);
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// routes
app.use("/auth", authRoutes);
app.use("/devices", deviceRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

