const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const http = require("http");
const server = http.createServer(app);
const bodyparser = require("body-parser");

const serverless = require("serverless-http");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3007;

mongoose
  .connect(
    "mongodb+srv://kannapa:Pjq2NljysmkTJO28@cluster0.f3qlfn8.mongodb.net/"
  )
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/home", (req, res) => {
  res.status(200).send({ msg: "Working App" });
});

app.use("/api/v1/privacyy", require("./src/route/privacy"));
app.use("/api/v1/aboutUss", require("./src/route/aboutUs"));
app.use("/api/v1/helpp", require("./src/route/helpAndSupport"));
app.use("/api/v1/termss", require("./src/route/terms"));
app.use("/api/v1/contact", require("./src/route/contactUs"));
app.use("/api/v1/images", require("./src/route/banner"));
app.use("/api/v1/typeOfSportt",require("./src/route/typeOfSport"))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};
