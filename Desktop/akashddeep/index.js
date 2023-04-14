const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");

const serverless = require("serverless-http");

const user = require("./src/route/user")
const enquiry = require("./src/route/enquiry")
const menu = require("./src/route/menu")
const banner = require("./src/route/banner")
const enquirydropdown = require("./src/route/enquirydropdown")
const submenu = require("./src/route/submenu")
const selectcity = require("./src/route/bookthisorder/selectcity")
const currency = require("./src/route/bookthisorder/addcurrency")
const bookthisorder = require("./src/route/bookthisorder/bookthisorder")

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 2004;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/home",(req, res) => {
  res.status(200).send({msg:"Working App"});
});

app.use("/user", user);
app.use("/enquiry",enquiry)
app.use("/menu",menu)
app.use("/banner",banner)
app.use("/enquirydropdown",enquirydropdown)
app.use("/submenu",submenu)
app.use("/selectcity",selectcity)
app.use("/currency",currency)
app.use("/bookthisorder",bookthisorder)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};

