
const { Product, Brand, Gender,Image,Category, Size,ProductColor, ImageDetail,sequelize } = require("../models");
class ProductController {
  // find all products
    static async findAll(req,res){
        try {
            const data = await Product.findAll({
                include: [Brand, Image,Category,Gender,ProductColor,Size,ImageDetail],
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
      try {
        const { name, description, price, mainImg, categoryId, imgUrl,color,hexCode,brandId,genderId,productCode,isFeatured,imgDetails } =
          req.body;
        const result = await Product.create(
          {
            name,
            description,
            price,
            brandId,
            authorId: req.user.id,
            categoryId,
            genderId,
            isFeatured,
            mainImg,
            color,
            hexCode,
            productCode,
          
          }
  
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
                );
              }),
              imgDetails.map(async (el) => {
                await ImageDetail.create(
                  {
                    imgDetails: el,
                    productId: result.id,
                  },
                );
              }),           
            )
            res.status(201).json(result);
          } catch (error) {
            console.log(error);
          }
        } else {
          res.status(400).json({ message: "Cannot create a product" });
        }
      } catch (error) {
        await t.rollback();
        res.status(500).json({ message: "Internal server error" });


      } 
    }
    // edit product
    static async editProduct(req,res){
      const id = +req.params.id;
      try {
        let { name, description, price, mainImg, categoryId,color,hexCode} = req.body;
        mainImg = mainImg === "undefined" ? req.body.prevMainImg : mainImg;

        const found = await Product.findByPk(id);
        if (found) {
          const result = await Product.update(
            { name, description, price, mainImg, categoryId,color,hexCode },
            {
              where: { id },
              returning: true,
            }
          );
          if (result[0] > 0) {
            res.status(200).json(result[1][0]);
          } else {
            res.status(400).json({ message: "failed to update" });
          }
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    }
    // delete a product
    static async deleteProduct(req,res){
      const id = +req.params.id;
      try {
        const found = await Product.findByPk(id);
        if (found) {
          const data = await Product.destroy({
            where: { id },
          });
          if (data > 0) {
            res.status(200).json({ message: "Product has been deleted" });
          } else {
            res
              .status(401)
              .json({ message: "We are unable to delete your data" });
          }
        } else {
          res.status(404).json({ message: "Product not found!" });
        }
      } catch (err) {
        res.status(500).json({ message: "Internal server error" });
      }
    }
    // delete product color
    static async deleteProductColor(req,res){
      const id = +req.params.id;
      try {
        const found = await ProductColor.findByPk(id);
        if (found) {
          const data = await ProductColor.destroy({
            where: { id },
          });
          if (data > 0) {
            res.status(200).json({ message: "Product has been deleted" });
          } else {
            res
              .status(401)
              .json({ message: "We are unable to delete your data" });
          }
        } else {
          res.status(404).json({ message: "Product not found!" });
        }
      } catch (err) {
        res.status(500).json({ message: "Internal server error" });
      }
    }
    
    // edit product color
    static async editProductColor(req,res){
      const id = +req.params.id;
      try {
        let { name, description, price, mainImg, categoryId,color,hexCode} = req.body;
        mainImg = mainImg === "undefined" ? req.body.prevMainImg : mainImg;
        const found = await ProductColor.findByPk(id);
        if (found) {
          const result = await ProductColor.update(
            { name, description, price, mainImg, categoryId,color,hexCode },
            {
              where: { id },
              returning: true,
            }
          );
          if (result[0] > 0) {
            res.status(200).json(result[1][0]);
          } else {
            res.status(400).json({ message: "failed to update" });
          }
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        await t.rollback();
        res.status(500).json({ message: "Internal server error" });
      }
    }
    // add products color
    static async addProductsColor(req,res){

      try {
        const { name, description, price, mainImg, categoryId, imgUrl,color,hexCode,brandId,genderId,productCode,isFeatured, productId,imgDetails } =
        req.body;
        const result = await ProductColor.create(
          {
            name, 
            description, 
            price, mainImg, 
            categoryId, 
            imgUrl,
            color,
            hexCode,
            brandId,
            genderId,
            productCode,
            isFeatured, 
            productId,       
            authorId: req.user.id,
          }
  
        );
        if (result) {
          try {
            await Promise.all(
              imgUrl.map(async (el) => {
                await Image.create(
                  {
                    imgUrl: el,
                    productColorId: result.id,                  },
                );
              }),
              imgDetails.map(async (el) => {
                await ImageDetail.create(
                  {
                    imgDetails: el,
                    productColorId: result.id,                  },
                );
              }),           
            )
            res.status(201).json(result);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
          }
        } else {
          res.status(400).json({ message: "Cannot create a product" });
        }
      } catch (error) {
        await t.rollback();
        res.status(500).json({ message: "Internal server error" });


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
        res.status(500).json({ message: "Internal server error" });

      }
    }
}
module.exports = ProductController;
