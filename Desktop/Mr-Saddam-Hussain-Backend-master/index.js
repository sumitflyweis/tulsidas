const app = require("./App");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

process.on("uncaughtException", (err) => {
  console.log("unhandled Rejection! Shutting down...! hello");
  console.log(err.name, err.message);
  process.exit(1); // '1' stands for uncaught exception & '0' for success.
});

// const DB = process.env.DATABASE;
// console.log(DB);

mongoose
  .connect("mongodb+srv://node3:node3@cluster0.tcw8z5q.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DATABASE connected!! 👍");
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejection! Shutting down....!hi");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); // '1' stands for uncaught exception & '0' for success.s
  });
});
