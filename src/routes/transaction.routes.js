import express from "express";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transaction.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createTransaction)
  .get(protect, getTransactions);

router
  .route("/:id")
  .put(protect, updateTransaction)
  .delete(protect, deleteTransaction);

export default router;
