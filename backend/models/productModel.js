const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const productSchema = new Schema({
    name: {type:String, required: true},
    image: {type:String, required:true, unique:false},
    brand: {type:String, required:true},
    category: {type:String, required:true, },
    description: {type:String, required:true},
    price: {type:String, required:true},
    countInStock: {type:String, required:true, },
    rating: {type:String, required:true},
    numReviews: {type:String, required:true},

},
{
    // to record the time
    timestamps: true,
}

);
//  model is a function takes two params the first one name of <Model the second one is schema  
const Product = mongoose.model('Product', productSchema);
module.exports = Product;