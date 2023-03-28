const customerAuth = async (req, res, next) => {
    const role = req.user.role;
    try {
      if (role === "customer") {
        next();
      } else {
        res.status(403).json({ message: "You dont have access" });

      }
    } catch (error) {
        console.log("masuk sini")
        console.log(error)
        res.status(500).json({ message: "Internal server error" });    
    }
  };
  
  module.exports = customerAuth;
  