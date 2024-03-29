const authorization = async (req, res, next) => {
    const role = req.user.role;
    try {
      if (role === "admin") {
        next();
      } else {
        res.status(403).json({ message: "You dont have access" });

      }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });    }
  };
  
  module.exports = authorization;