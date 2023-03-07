const router = require("express").Router();
const ProductController = require('../controllers/ProductController');
const authorization = require('../middlewares/authorization');
const uploadFiles = require("../middlewares/multer");
const imageKit = require("../middlewares/imageKit");

router.get('/products', authorization, ProductController.findAll)
router.get('/products/:id', authorization, ProductController.getById)
router.get('/brands',authorization, ProductController.getBrands )
router.get('/categories',authorization, ProductController.getBrands )
module.exports = router;