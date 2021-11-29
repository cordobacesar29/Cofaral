const { Router } = require('express');

const productController = require('../controllers/product.controller');
const router = Router();

router.get('/', productController.getProduct);
router.get('/:id', productController.getProductById);
router.put("/:id", productController.updateProduct);
router.post('/', productController.createProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;