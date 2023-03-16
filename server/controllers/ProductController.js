
const { Product, Brand, Gender,Image,Category, Size,ProductColor, sequelize } = require("../models");
class ProductController {
  // find all products
    static async findAll(req,res){
        try {
          console.log("masuk")
            const data = await Product.findAll({
                include: [Brand, Image,Category,Gender,ProductColor,Size],
                order: [["id", "ASC"]],
              });
              res.status(200).json(data);
            
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
            console.log(error)

        }
    }
  // get a product by id
    static async getById(req,res){
        try {
            const id = +req.params.id;
            const data = await Product.findByPk(id, {
              include: [Brand, Image,Category,Gender,ProductColor,Size],
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
    // get product color by Id 
    static async getColorById(req,res){
      try {
        const id = +req.params.id;
        const data = await ProductColor.findByPk(id, {
          include: [Brand, Image,Category,Gender,Size],
        });
        if (data) {
          res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Sneakers not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });

      }
    }
    // get brands
    static async getBrands(req,res){
        try {
            const data = await Brands.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }

    }
    // get products by brand 
    static async getProductsByBrand (req,res){
      const id = +req.params.id;
      try {
        const data = await Brand.findAll({
          where: {
            id,
          },
          include: [Product],
        });
        if (data) {
          res.status(200).json(data);
        } else {
          res.send(404).json({ message: "Product not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    }
    // get Genders
    static async getGenders(req,res){
      try {
        const data = await Gender.findAll();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });

      }
    }   
    // get item by gender
    static async getProductsByGender(req,res){
      const id = +req.params.id;
      try {
        const data = await Gender.findAll({
          where: {
            id,
          },
          include: [Product],
        });
        if (data) {
          res.status(200).json(data);
        } else {
          res.send(404).json({ message: "Product not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    }
    // get categories
    static async getCategories(req,res) {
        try {
            const data = await Category.findAll();
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
    }
    // get products by categories
   static async getProductsByCategory(req,res){
    const id = +req.params.id
    try {
      const data = await Category.findAll({
        where: {
          id
        },
        include: [Product]
      })
      if(data){
        res.status(200).json(data)
      } else {
        res.status(401).json({message: "Product not found!"})
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });

    }
   }
    // add a product
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
            color:"blue",
            hexCode: "#0000",
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
    // add products color
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
            color:"red",
            hexCode: "#eeee",
            productId: 2,

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
    // add stocks
    static async addStocks (req,res){
      try {
        const {type,sizeAvailable, productColorId,productId} = req.body
      
        const result = await Size.create(
          {
           type,
           sizeAvailable,
           productColorId,
           productId

          },
  
        );
        if(result){
          res.status(201).json(result);

        } else {
          res.status(400).json({ message: "Cannot add stocks" });

        }
      } catch (error) {
        console.log(error)
        // res.status(500).json({ message: "Internal server error" });

      }
    }
}
module.exports = ProductController;
