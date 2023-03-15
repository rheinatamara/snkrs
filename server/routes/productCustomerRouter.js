const router = require("express").Router();
const ProductController = require('../controllers/ProductController');

router.get('/customer/products', ProductController.findAll)
router.get('/customer/products/:id', ProductController.getById)
router.get('/customer/brands',ProductController.getBrands )
router.get('/customer/categories',ProductController.getCategories )
router.get('/customer/productsColor/:id',ProductController.getColorById)
router.get('/customer/genders',ProductController.getGenders)
module.exports = router;