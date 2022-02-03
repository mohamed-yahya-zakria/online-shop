const jwt = require('jsonwebtoken');
const generateToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || 'something_secret', {expiresIn: '45d'});
}

// middleware to authenticate user
const isAuth  = (req, res, next) =>{
    const authorization = req.headers.authorization;
    if(authorization) {
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET || 'something_secret', (err, decode)=>{
                if(err){
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