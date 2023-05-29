const express = require("express");
const {
  createMessageByAdmin,
  getallMessage,
  updateMessage,
  deleteMessage,
  getallvendorsMsgByAdmin
} = require("../controller/admin/messageToAllFollowers");
const {
    getallMessageByCustomer,
    getMessageByIdByCustomer,
  Updateenquiry,
  deleteenquiry,
} = require("../controller/customer/messageToAllFollowers");
const { getallMessageByVendor, getMessageByIdByVendor} = require("../controller/vendor/messageToAllFollowers");
const messageRouter = express.Router();

//USER
 messageRouter.get('/getallMessageByCustomer', getallMessageByCustomer);
 messageRouter.get('/getMessageByIdByCustomer/:id', getMessageByIdByCustomer);

//ADMIN
messageRouter.post("/createMessageByAdmin", createMessageByAdmin);
messageRouter.get("/getallMessage", getallMessage);//
messageRouter.put("/getallvendorsMsgByAdmin", getallvendorsMsgByAdmin)
messageRouter.put("/updateMessage/:id", updateMessage);
messageRouter.delete("/deleteMessage/:id", deleteMessage);

//VENDOR
messageRouter.get('/getallMessageByVendor',getallMessageByVendor);
messageRouter.get('/getMessageByIdByVendor/:id',getMessageByIdByVendor);

module.exports = messageRouter;
