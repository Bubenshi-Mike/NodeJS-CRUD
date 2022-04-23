const express = require('express');
const { createProduct, getProduct, allProducts, updateProduct, deleteProduct, deleteAllProducts } = require('../controller/product.controller');

const router = express.Router();

router.route('/product').post(createProduct);
router.route('/product/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

router.route('/products').get(allProducts).delete(deleteAllProducts);

module.exports = router;
