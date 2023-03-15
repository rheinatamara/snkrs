const { Product, Brand, Gender,Image,Category, Size, Bag,User } = require("../models");

class BagController {
    static async showBag(req,res){
        try {
            const data = await Bag.findAll({
              include: [User, Product,Brand, Image,Category,Gender,Size],
              where: {
                UserId: +req.user.id,
              },
            });
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ message: "Internal server error" });

          }
    }
}

module.exports = BagController;