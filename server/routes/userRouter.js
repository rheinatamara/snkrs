const router = require("express").Router();

const UserController = require('../controllers/UserController');
router.get("/register", UserController.registerAdmin)
module.exports = router;
