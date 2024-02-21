const express = require('express');
const { getAllProducts, getAllProductsStatic } = require('../controllers/products');

const ProductsRoute = express.Router();

ProductsRoute.route('/').get(getAllProducts);
ProductsRoute.route('/static').get(getAllProductsStatic);

module.exports = ProductsRoute;