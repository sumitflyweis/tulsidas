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
app.use("/api/v1/fantacypreviewss",require("./src/route/fantacypreview"))
app.use("/api/v1/predict",require("./src/route/predictAndWin"))
app.use("/api/v1/authh",require("./src/route/admin/auth"))
app.use("/api/v1/userr",require("./src/route/userlogin"))
app.use("/api/v1/trending",require("./src/route/trendingNews"))
app.use("/api/v1/advertisementt",require("./src/route/advertisement"))
app.use("/api/v1/featurevedioo",require("./src/route/featuredvedios"))
app.use("/api/v1/reelss",require("./src/route/reels"))
app.use("/api/v1/contentt",require("./src/route/content"))
app.use("/api/v1/fanatikkZonee",require("./src/route/fanatikkZone"))
app.use("/api/v1/tournamentt",require("./src/route/tournament"))
app.use("/api/v1/rankingg",require("./src/route/teamranking"))
app.use("/api/v1/updaterank",require("./src/route/updateRanking"))
app.use("/api/v1/polll",require("./src/route/poll"))
app.use("/api/v1/anyOnee",require("./src/route/news_articles_vedios_banner"))
// app.use("/api/v1/reportt",require("./src/route/reportAndAnlytics"))





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};
