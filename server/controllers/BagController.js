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
    static async deleteBag(req,res){
        
        try {
            const { productId, productColorId } = req.body;
            const where = productColorId ? { productColorId } : { productId };
            const bag = await Bag.findOne({ where });
            if(bag){
                const whereClause = productColorId ? {productId} : {productColorId};
                const destroyed = await bag.destroy({where: whereClause});
                if(destroyed){
                    res.status(200).json({message: "your bag has been deleted"})
                } else {
                    res.status(400).json({message: "cannot be deleted"})
                }
                
            } else {
                console.log("gaketemu")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports = BagController;