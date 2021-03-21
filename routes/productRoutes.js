const express = require('express');
const productController = require('./../controllers/productController');
const router = express.Router();

router.param('id', productController.checkID);

//  route handlers should be only concerned with getting update and deleting products.
// that is why we validate de data outside these handlers.
router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.checkBody, productController.createProduct); // chaining multiple middlewares

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
