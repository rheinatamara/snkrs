const router = require("express").Router();
const UserController = require('../controllers/UserController');
router.post("/register", UserController.registerAdmin)
module.exports = router;
