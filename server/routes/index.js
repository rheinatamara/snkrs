const router = require("express").Router();
const userRouter = require("./userRouter");
const authentication = require('../middlewares/authentication');
const productsCustomerRouter = require("./productCustomerRouter");


router.use("/", userRouter);
router.use("/", productsCustomerRouter);
router.use(authentication)


module.exports = router;