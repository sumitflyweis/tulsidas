const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
// const walletRouter = require("./routes/walletRoutes");
// const notifiRouter = require("./routes/notificationRouter");

const globalErrorHandler = require("./controllers/errorController");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

//  ROUTES
// app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/wallet", walletRouter);
// app.use("/api/v1/notification", notifiRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find the ${req.url} on this server!`,
  });
});

app.use(globalErrorHandler);
module.exports = app;
