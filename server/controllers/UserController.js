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
      res.status(500).json({ message: "Internal server error" });
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
      if(!foundUser){
        res.status(404).json({message: "Account not found"})
      } else {
           const match = decode(password, foundUser.password);
        if (!match) {
          res.status(500).json({ message: "Incorrect email or password" });
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
      res.status(500).json({ message: "Internal server error" });
      console.log(error)
    }
  }
  static async registerCustomer(req,res,next){
    try {
      const {email,password,name} = req.body;
      const result = await User.create({
        name,
        email,
        password,
        role: "customer"
      });
      res.status(201).json({
        id: result.id,
        name: result.name,
        email: result.email,
        role: result.role,
        
      });
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async loginCustomer(req,res,next){
    try {
      const{email,password,name} = req.body;
      const foundUser = await User.findOne({
        where: {
          email
        }
      });
      if (!foundUser){ 
        res.status(404).json({message: "Account not found"})

      } else {
        const isMatch = decode(password,foundUser.password)
        if(!isMatch) {
          res.status(500).json({message: "Incorrect Email or Password"})
        } else {
          const access_token = sign({
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            role: foundUser.role
          })
          res.status(200).json({
            access_token,
            email: foundUser.email,
            role: foundUser.role,
            name: foundUser.name,
          });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.log(error)

    }
  }
    
}
module.exports = UserController;
