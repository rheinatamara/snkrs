
const { Product, Brand, Image,Category,sequelize } = require("../models");

class ProductController {
    static async findAll(req,res,){
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
    static async getById(req,res,){
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
    static async getBrands(req,res,){
        try {
            const data = await Brands.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }

    }
    static async getCategories(req,res,) {
        try {
            const data = await Category.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
    }
    static async addProduct(req,res,){
      const t = await sequelize.transaction();
      try {
        const { name, slug, description, price, mainImg, categoryId, imgUrl } =
          req.body;
        const result = await Product.create(
          {
            name,
            description,
            price,
            brandId,
            authorId: req.user.id,
            categoryId,
            gender,
            sizeAvailable,
            isFeatured
          },
  
          { transaction: t }
        );
        if (result) {
          try {
            await Promise.all(
              imgUrl.map(async (el) => {
                await Image.create(
                  {
                    imgUrl: el,
                    productId: result.id,
                  },
                  { transaction: t }
                );
              })
            );
            await t.commit();
            res.status(201).json(result);
          } catch (error) {
            console.log(error);
          }
        } else {
          res.status(400).json({ message: "Cannot create a product" });
        }
      } catch (error) {
        await t.rollback();
        console.log(error);
      }
        
    }
}
module.exports = ProductController;
