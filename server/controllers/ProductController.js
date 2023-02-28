
const { Product, Brand, Image,Category } = require("../models");

class ProductController {
    static async findAll(req,res,next){
        try {
            const data = await Product.findAll({
                include: [Brand, Image],
                order: [["id", "ASC"]],
              });
              res.status(200).json(data);
            
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });

        }
    }
    static async getById(req,res,next){
        try {
            const id = +req.params.id;
            const data = await Product.findByPk(id, {
              include: [Brand,Image],
            });
      
            if (data) {
              res.status(200).json(data);
            } else {
                res.status(404).json({ message: "Sneakers not found" });

            }
          } catch (err) {
            res.status(500).json({ message: "Internal server error" });
            console.log(err)
          }
    }
    static async getBrands(req,res,next){
        try {
            const data = await Brands.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }

    }
    static async getCategories(req,res,next) {
        try {
            const data = await Category.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
    }
}
module.exports = ProductController;
