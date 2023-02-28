const router = require("express").Router();
const ProductController = require('../controllers/ProductController');

router.get('/customer/products', ProductController.findAll)
router.get('/customer/products/:id', ProductController.getById)
router.get('/customer/brands',ProductController.getBrands )
router.get('/customer/categories',ProductController.getBrands )
module.exports = router;