const router = require("express").Router();
const ProductController = require('../controllers/ProductController');
const authorization = require('../middlewares/authorization');
const uploadFiles = require("../middlewares/multer");
const imageKit = require("../middlewares/imageKit");
router.post('/products', authorization, uploadFiles, imageKit, ProductController.addProduct)

module.exports = router;