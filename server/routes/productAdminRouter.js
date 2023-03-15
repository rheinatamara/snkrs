const router = require("express").Router();
const ProductController = require('../controllers/ProductController');
const authorization = require('../middlewares/authorization');
const uploadFiles = require("../middlewares/multer");
const imageKit = require("../middlewares/imageKit");

router.get('/products', authorization, ProductController.findAll)
router.get('/products/:id', authorization, ProductController.getById)
router.get('/brands',authorization, ProductController.getBrands )
router.get('/categories',authorization, ProductController.getBrands )
router.post('/products',
authorization,
uploadFiles,
imageKit,
ProductController.addProducts)
router.post('/productsColor',
authorization,
uploadFiles,
imageKit,
ProductController.addProductsColor)
router.get('/productsColor/:id', authorization, ProductController.getColorById);
router.post('/stocks', authorization, ProductController.addStocks);

module.exports = router;