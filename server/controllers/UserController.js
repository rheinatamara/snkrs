const {User} = require('../models/index');
const { decode } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

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
  static async loginAdmin(req,res,next){
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({
        where: {
          email,
        },
      });
      if (!foundUser) {
        res.send(501).json({message: "incorect email or password"})
      } else {
        const match = decode(password, foundUser.password);
        if (!match) {
          res.send(500).json({ message: "Internal server error" });
          console.log(err)
        } else {
          const access_token = sign({
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            role: foundUser.role,
          });
          res.status(200).json({
            access_token,
            email: foundUser.email,
            role: foundUser.role,
            name: foundUser.name,
          });
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
    
}
module.exports = UserController;
