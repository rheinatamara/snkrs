const {User} = require('../models/index');
class UserController {
  static async registerAdmin(req, res, next) {
    try {
      const { name,email,password } = req.body;
      const result = await User.create({
        name,
        email,
        password,
        role: "admin",
       
      });
      res.status(201).json({
        id: result.id,
        name: result.name,
        email: result.email,
        role: result.role,
        
      });
    } catch (err) {
      res.send(500).json({ message: "Internal server error" });
        console.log(err)
    }
  }
    
}
module.exports = UserController;
