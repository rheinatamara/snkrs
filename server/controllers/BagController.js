const { Product, ProductColor, Bag,User } = require("../models");

class BagController {
    static async showBag(req,res){
        try {
            const data = await Bag.findAll({
              include: [User, Product,ProductColor],
              where: {
                userId: +req.user.id,
              },
            });
            if(data){
                res.status(200).json(data);

            } else {
                res.status(404).json({message: "you dont have anything in bag yet"})
            }
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });
            console.log(error)

          }
    }
    static async addToBag(req,res){
        try {
            const { productId, productColorId } = req.body;
            const userId = req.user.id;
            const where = productColorId ? { productColorId } : { productId };
            const bag = await Bag.findOne({ where });
        
            if (bag) {
              const updatedBag = await bag.update({ quantity: bag.quantity + 1 });
              res.json(updatedBag);
            } else {
              const data = productColorId ? { productColorId, userId } : { productId, userId };
              const newBag = await Bag.create({ ...data, quantity: 1 });
              res.json(newBag);
            }
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
    }
    // static async addToBag(req,res){
    //     const productId = +req.body.productId;
    //     const productColorId = +req.body.productColorId;
    //     const userId = +req.user.id;
    //     try {
    //         if(!productColorId){
    //             const bag = await Bag.findOne({ where: { productId: productId } });

    //             if (bag) {
    //             // If a bag is found, update its quantity attribute
    //             const updatedBag = await bag.update({ quantity: bag.quantity + 1 });
    //             res.status(200).json(updatedBag);
    //             } else {
    //             // If no bag is found, create a new one with quantity 1
    //             const newBag = await Bag.create({ productId, userId, quantity: 1 });
    //             res.status(200).json(newBag);
    //             }
    
    //         } else {
    //             const bag = await Bag.findOne({ where: { productColorId: productColorId } });

    //             if (bag) {
    //             // If a bag is found, update its quantity attribute
    //             const updatedBag = await bag.update({ quantity: bag.quantity + 1 });
    //             res.status(200).json(updatedBag);
    //             } else {
    //             // If no bag is found, create a new one with quantity 1
    //             const newBag = await Bag.create({ productColorId, userId, quantity: 1 });
    //             res.status(200).json(newBag);
    //             }
    //         }
            
         
    //     } catch (error) {
    //         console.log(error)
    //         res.status(500).json({ message: "Internal server error" });

    //     }
    // }
}

module.exports = BagController;