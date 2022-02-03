const express = require("express");
const Order = require("../models/orderModel");
const asyncHandler = require('express-async-handler');
const isAuth = require("../utils");

const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  asyncHandler(async (req, res) => {
  
    if (req.body.orderItems.length === 0) {
     
      res.status(400).send({ message: " your cart is empty" });
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.savePaymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice : req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,

        });
        
        const createdOrder = await order.save();
        console.log('this is create order', createdOrder)
        res.status(201).send({message: 'order is Created successfully', order : createdOrder});
    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

module.exports = orderRouter ;