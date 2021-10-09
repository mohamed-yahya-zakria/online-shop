const express = require("express");
const Order = require("../models/orderModel");
const asyncHandler = require('express-async-handler');
const isAuth = require("../utils");

const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  asyncHandler(async (req, res) => {
    // check if orderItem contains items or not
    if (req.body.orderItems.length === 0) {
      //client error or is validtion error
      res.status(400).send({ message: " your cart is empty" });
    } else {
        const order = new Order({
            //whole collection
            orderItems: req.body.orderItems,
            //whole collection
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.savePaymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice : req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,

        // after that we should have user authenticate therefore we need make meddileware  in utils to get the user authenticate

        });
        // save inside else part
        const createdOrder = await order.save();

        console.log('this is create order', createdOrder)
        // order : createdOrder = send it to front it
        // find u this this mes, all the data which are saved in DB and all responses from backend side if the process success in (network => XHR => select item => Response and preview) in the browser) 
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