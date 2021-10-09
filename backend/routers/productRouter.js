const express = require('express');
const asyncHandler = require('express-async-handler');
const data = require('../data');
const Product = require('../models/productModel')

const productRouter = express.Router();

// api for sending list products to frontend .('/')= '/api/products
productRouter.get('/', asyncHandler(async(req, res)=>{
products = await Product.find({});
res.send(products)
}) 
)

productRouter.get('/seed', asyncHandler(async(req, res)=>{
    // await Product.remove({});
 createdProducts = await Product.insertMany(data.products);
 res.send({createdProducts})
  })
);

// get detials product api
productRouter.get('/:id', asyncHandler(async(req,res)=>{
    // we use await coz findById is return a promise and by useing await it's gonna be converted to a real data and set to var(product)
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message: 'Sorry Product Not Found'});
    }
})
);

module.exports = productRouter;