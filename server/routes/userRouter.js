const router = require("express").Router();
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
// Admin
router.post("/register", UserController.registerAdmin)
router.post("/login", UserController.loginAdmin)

// Customer
router.post('/customer/register', UserController.registerCustomer)
router.post('/customer/login', UserController.loginCustomer)
router.get('/customer/product', ProductController.findAll)
module.exports = router;
