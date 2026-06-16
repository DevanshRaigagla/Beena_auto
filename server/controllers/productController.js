const Product = require('../models/Product');

exports.getProducts = (req, res) => {
  try {
    const products = Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = (req, res) => {
  try {
    const product = Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategories = (req, res) => {
  try {
    const categories = Product.distinct();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
