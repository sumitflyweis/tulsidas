const express = require("express");
const router = express.Router();
const notifiController = require("../controllers/notifiController");

router
  .route("/")
  .get(notifiController.getNotificationOfUser)
  .delete(notifiController.deleteCurrentNotification);

router
  .route("/:id")
  .delete(notifiController.deleteNotiById)
  .post(notifiController.sendNotification);

module.exports = router;
