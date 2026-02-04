import Transaction from "../models/Transaction.js";

/**
 * CREATE
 */
export const createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({
      user: req.user.id,
      ...req.body,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * READ + FILTERS
 * /api/transactions?type=expense&category=Food&startDate=2025-01-01&endDate=2025-01-31&sort=desc
 */
export const getTransactions = async (req, res) => {
  try {
    const { type, category, startDate, endDate, sort } = req.query;

    const query = { user: req.user.id };

    if (type) query.type = type;
    if (category) query.category = category;

    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const transactions = await Transaction.find(query).sort({
      date: sort === "asc" ? 1 : -1,
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * UPDATE
 */
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });

    if (transaction.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * DELETE
 */
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });

    if (transaction.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });

    await transaction.deleteOne();
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
