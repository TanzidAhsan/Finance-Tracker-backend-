import express from "express";
import { getSummary } from "../controllers/summary.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getSummary);

export default router;
