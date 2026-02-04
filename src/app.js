import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import summaryRoutes from "./routes/summary.routes.js";



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/summary", summaryRoutes);



app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
