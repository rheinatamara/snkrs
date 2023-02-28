const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadFiles = upload.fields([
  {
    name: "mainImg",
    maxCount: 1,
  },
  {
    name: "imgUrl",
    maxCount: 40,
  },
]);

module.exports = uploadFiles;
