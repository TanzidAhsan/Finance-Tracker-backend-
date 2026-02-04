import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createCategory)
  .get(protect, getCategories);

export default router;
