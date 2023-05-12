const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const serverless = require("serverless-http");
const app = express();
const bodyparser = require("body-parser");

const customerRouter = require("./src/route/customerAccount");
const vendorRouter = require("./src/route/vendorAccount");
const enquiryRouter = require("./src/route/enquiryform");
const categoryStoreRouter = require("./src/route/categoryStore");
const subCategoryRouter = require("./src/route/subCategory");
const subscriptionRouter = require("./src/route/subscription");
const paymentRouter = require("./src/route/payment");
const MyFavouriteRouter = require("./src/route/myFavourite");
const shopAndServiceRouter = require("./src/route/shop&service");
const bookingRouter = require("./src/route/booking");
const walletRouter = require("./src/route/wallet");
const settingRouter = require("./src/route/setting");
const helpRouter = require("./src/route/help");
const AcitivityMakerRouter = require("./src/route/activityMaker");
const messageRouter = require("./src/route/messageToAllFollowers");
const verifiedRouter = require("./src/route/verifiedUser");
const generateReport = require("./src/route/generateReport");
const post = require("./src/route/post");
const offers = require("./src/route/offer");
const catalogue = require("./src/route/cataloge");
const notification = require("./src/route/notification");
const manpower = require("./src/route/manpower");
const attendence = require("./src/route/attendence");
const uploadDocument = require("./src/route/uploadDocument");
// const admin = require("./src/route/admin")
const commonLogin = require("./src/route/auth");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 2010;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/home", (req, res) => {
  return res.status(200).send({ msg: "Working App" });
});

app.use("/customerRouter", customerRouter);
app.use("/vendorRouter", vendorRouter);
app.use("/enquiryRouter", enquiryRouter);
app.use("/categoryStoreRouter", categoryStoreRouter);
app.use("/subCategoryRouter", subCategoryRouter);
app.use("/subscriptionRouter", subscriptionRouter);
app.use("/paymentRouter", paymentRouter); //
app.use("/MyFavouriteRouter", MyFavouriteRouter);
app.use("/shopAndServiceRouter", shopAndServiceRouter); //
app.use("/bookingRouter", bookingRouter);
app.use("/walletRouter", walletRouter);
app.use("/settingRouter", settingRouter);
app.use("/helpRouter", helpRouter);
app.use("/AcitivityMakerRouter", AcitivityMakerRouter);
app.use("/messageRouter", messageRouter);
app.use("/verifiedRouter", verifiedRouter);
app.use("/generateReport", generateReport);
app.use("/post", post);
app.use("/offers", offers);
app.use("/catalogue", catalogue);
app.use("/notification", notification);
app.use("/manpower", manpower);
app.use("/attendence", attendence);
app.use("/uploadDocument", uploadDocument);
// app.use("/admin",admin)
app.use("/commonLogin", commonLogin);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};
