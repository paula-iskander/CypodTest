import express from "express";
import { protect, adminOnly } from "../middleware/auth.js";
import { getAllDevices, getDeviceById } from "../controllers/deviceController.js";

const router = express.Router();

router.get("/", getAllDevices);
router.get("/:id", protect, adminOnly, getDeviceById);

export default router;
