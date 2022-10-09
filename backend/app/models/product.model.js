const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    SKU: String,
    brand: String,
    cost: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    specific: Object,
  })
);


module.exports = Product;
