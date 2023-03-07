const router = require("express").Router();
const userRouter = require("./userRouter");
const authentication = require('../middlewares/authentication');
const productsCustomerRouter = require("./productCustomerRouter");
const productsAdminRouter = require('./productAdminRouter');

router.use("/", userRouter);
router.use("/", productsCustomerRouter);
router.use(authentication)
router.use("/", productsAdminRouter)


module.exports = router;