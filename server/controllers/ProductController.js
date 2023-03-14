
const { Product, Brand, Gender,Image,Category, Size,ProductColor, sequelize } = require("../models");

class ProductController {
    static async findAll(req,res){
        try {
          console.log("masuk")
            const data = await Product.findAll({
                include: [Brand, Image,Category,Gender,ProductColor],
                order: [["id", "ASC"]],
              });
              res.status(200).json(data);
            
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
            console.log(error)

        }
    }
    static async getById(req,res){
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
    static async getBrands(req,res){
        try {
            const data = await Brands.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }

    }
    static async getCategories(req,res) {
        try {
            const data = await Category.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
    }
    static async addProducts(req,res,){
      const t = await sequelize.transaction();
      try {
        const { name, description, price, mainImg, categoryId, imgUrl,color,hexCode } =
          req.body;
        const result = await Product.create(
          {
            name : "1234",
            description:"1234",
            price:123,
            brandId:1,
            authorId: req.user.id,
            categoryId:1,
            genderId:1,
            isFeatured:false,
            mainImg,
            color:"red",
            hexCode: "#0001",
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
    static async addProductsColor(req,res){
      const t = await sequelize.transaction();
      try {
        const { name, description, price, mainImg, categoryId, imgUrl,color,hexCode } =
          req.body;
        const result = await ProductColor.create(
          {
            name : "1234",
            description:"1234",
            price:123,
            brandId:1,
            authorId: req.user.id,
            categoryId:1,
            genderId:1,
            isFeatured:false,
            mainImg,
            color:"blue",
            hexCode: "#0000",
            productId: 1,

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
                    productColorId: result.id,
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
    static async addStocks (req,res){
      try {
        
      } catch (error) {
        
      }
    }
}
module.exports = ProductController;
