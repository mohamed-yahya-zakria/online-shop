const jwt = require('jsonwebtoken');

// sign this is very important method from jwt and by sign method we can generate the token, it take 3 params . the first one it's the obj that we gonna use by generate token . the second one is SECRET KEY and the secret key should be not in the sign method should in .env file. the third one is expired date from this token EX '30d' it means is 60 days
const generateToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        //why i used logical or (||) , so coz if any one download my code and don't have .env file will be  work with him
    }, process.env.JWT_SECRET || 'something_secret', {expiresIn: '45d'});
}

// middleware to authenticate user
const isAuth  = (req, res, next) =>{
    const authorization = req.headers.authorization;
    // if is authentication is exist 
    if(authorization) {
        const token = authorization.slice(7, authorization.length);
        // verify = to encode the token var
        // decode = which contains the data inside token
        jwt.verify(token, process.env.JWT_SECRET || 'something_secret', (err, decode)=>{
                if(err){
                    // 401 authorizat
                    res.status(401).send({message: "Invaild Tocken"});
                } else {
                    req.user = decode;
                    next();
                }
        });

    } else {
         res.status(401).send({message: 'no token'});
    }
};


module.exports = generateToken;
module.exports = isAuth