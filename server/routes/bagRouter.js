const router = require("express").Router();
const BagController = require('../controllers/BagController');
const customerAuth = require('../middlewares/customerAuth');
router.get('/customer/bag',customerAuth, BagController.showBag)
router.post(
    "/customer/bag",
    customerAuth,
    BagController.addToBag
  );
router.delete("/customer/bag", customerAuth, BagController.deleteBag)
module.exports = router