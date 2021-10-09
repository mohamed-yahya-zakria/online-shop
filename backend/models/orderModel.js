const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Product = require("./productModel");

//by having all  this info in the model we save thin inf in UI
const orderSchema = new Schema({
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      //ref: "Product" = which refer to productModel 
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    },
  ],

  shippingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
  },

  paymentMethod: { type: String, required: true },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true},
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
},
// save the data in database
{timestamps: true},
);

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;