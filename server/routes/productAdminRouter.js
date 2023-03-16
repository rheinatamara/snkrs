const router = require("express").Router();
const ProductController = require('../controllers/ProductController');
const authorization = require('../middlewares/authorization');
const uploadFiles = require("../middlewares/multer");
const imageKit = require("../middlewares/imageKit");

router.get('/products', authorization, ProductController.findAll)
router.get('/products/:id', authorization, ProductController.getById)
router.get('/brands',authorization, ProductController.getBrands )
router.get('/brands/:id',authorization, ProductController.getProductsByBrand )
router.get('/categories',authorization, ProductController.getBrands )
router.get('/categories/:id',authorization, ProductController.getProductsByCategory)
router.get('/genders',authorization,ProductController.getGenders)
router.get('/genders/:id', authorization,ProductController.getProductsByGender)
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
router.put(
    "/products/:id",
    authorization,
    uploadFiles,
    imageKit,
    ProductController.editProduct
  );
router.put(
    "/productsColor/:id",
    authorization,
    uploadFiles,
    imageKit,
    ProductController.editProductColor
  );
router.delete("/products/:id", authorization, ProductController.deleteProduct);
router.delete("/productsColor/:id", authorization, ProductController.deleteProductColor)

router.post('/stocks', authorization, ProductController.addStocks);

module.exports = router;