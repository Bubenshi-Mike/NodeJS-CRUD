const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  price: {
    type: Number,
    required: true,
    default: 100,
    index: true
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/dbhyiqmzl/image/upload/v1650269836/Plextore/product-1_w8wi4c.png",
  },
  sku: {
    type: Number,
    default: 1234
  },
  overview: {
      type: String,
      required: true
  },
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
