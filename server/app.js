require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");
const router = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log("app listening on port", port);
});
