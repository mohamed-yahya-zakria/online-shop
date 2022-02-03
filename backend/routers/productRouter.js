const express = require('express');
const asyncHandler = require('express-async-handler');
const data = require('../data');
const Product = require('../models/productModel')

const productRouter = express.Router();
productRouter.get('/', asyncHandler(async(req, res)=>{
products = await Product.find({});
res.send(products)
}) 
)

productRouter.get('/seed', asyncHandler(async(req, res)=>{
 createdProducts = await Product.insertMany(data.products);
 res.send({createdProducts})
  })
);

productRouter.get('/:id', asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message: 'Sorry Product Not Found'});
    }
})
);

module.exports = productRouter;