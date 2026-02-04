import Transaction from "../models/Transaction.js";

export const getSummary = async (req, res) => {
  try {
    const summary = await Transaction.aggregate([
      { $match: { user: req.user._id } },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
