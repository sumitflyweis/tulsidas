const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");

const serverless = require("serverless-http");

// const auth = require("./src/route/auth")
// const subcriptions = require("./src/route/subcriptions")
// const staff = require("./src/route/staff")
// const department = require("./src/route/department")


require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 2008

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

//  app.use("/api/v1/",require("./src/route/router"));
// app.use("/subcriptions",subcriptions)
// app.use("/staff",staff)
// app.use("/department",department)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};

