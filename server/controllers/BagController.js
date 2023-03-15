const { Product, Brand, Gender,Image,Category, Size, Bag,User } = require("../models");

class BagController {
    static async showBag(req,res){
        try {
            const data = await Bag.findAll({
              include: [User, Product],
              where: {
                userId: +req.user.id,
              },
            });
            if(data){
                console.log("masuk ada")
            } else {
                console.log("masuk gaada")
            }
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
            console.log(error)

          }
    }
    static async addToBag(req,res){
        const productId = +req.body.productId;
        const productColorId = +req.body.productColorId;
        const userId = +req.user.id;

        try {
            // console.log(productId,userId)
            if(!productColorId){

                console.log(productId)
                const data = await Bag.findOne({ where: { productId: productId} });
                if(data){
                    let quantity = data.quantity
                    const result = await Bag.update(
                        { quantity : quantity++ },
                        {
                          where: { productId:productId },
                          returning: true,
                        }
                      );
                        res.status(200).json(result)
                } else {
                    console.log("masuk create new")
                    const data = await Bag.create({
                        productId, quantity:1,productColorId: null
                    })
                    if(data){
                        res.status(200).json(data)
                    }
                }
            } else {
                console.log("gaada")
            }
            
            // if (data){
            //     console.log(data)
            // } else {
            //     console.log("gaada")
            // }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = BagController;