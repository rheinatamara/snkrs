const router = require("express").Router();
const BagController = require('../controllers/BagController');
const customerAuth = require('../middlewares/customerAuth');
router.get('/customer/bag', BagController.showBag)

module.exports = router