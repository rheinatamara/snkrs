const router = require("express").Router();
const ProductController = require('../controllers/ProductController');

router.get('/customer/products', ProductController.findAll)
router.get('/customer/products/:id', ProductController.getById)
router.get('/customer/brands',ProductController.getBrands )
router.get('/customer/brands/:id',ProductController.getProductsByBrand )
router.get('/customer/categories',ProductController.getCategories )
router.get('/customer/productsColor/:id',ProductController.getColorById)
router.get('/customer/genders',ProductController.getGenders)
router.get('/customer/genders/:id', ProductController.getProductsByGender)
router.get('/customer/categories/:id', ProductController.getProductsByCategory)
module.exports = router;