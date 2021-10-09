const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const userSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true}, 
    isAdmin:{type:Boolean, required:true, default:false},

},
{
    // to record the time
    timestamps: true,
}

);
//  model is a function takes two params the first one name of <Model the second one is schema  
const User = mongoose.model('User', userSchema);
module.exports = User;