import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      user: req.user.id,
      ...req.body,
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
