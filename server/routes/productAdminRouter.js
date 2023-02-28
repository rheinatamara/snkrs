const router = require("express").Router();
const ProductController = require('../controllers/ProductController');
const authorization = require('../middlewares/authorization');
router.post('/products', authorization,ProductController.addProduct)

module.exports = router;