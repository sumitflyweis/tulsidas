const express = require('express');
const order = require('../Controller/order');
const {requireSignin} = require('../MiddleWare/Auth')

const router = express();

router.post('/',requireSignin, order.createOrder);
// router.get('/', order.GetAllNotification);
// router.get('/:id', order.GetBYNotifyID);
// router.get('/:id', order.GetBYNotifyID);
// router.delete('/:id', order.deleteNotification);

module.exports = router;