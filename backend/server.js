const express= require('express') ;
/* import express from 'express'; */
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/order', orderRouter);

// connect with DB 

const PORT = process.env.PORT || 5001
const DB_NAME = process.env.DB_NAME
const DB_LINK = process.env.MONGO_LINK + DB_NAME
mongoose.connect(DB_LINK, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
         useCreateIndex: true,
    })
    .then(() => console.log('MongoDB database is Successfully connected'))
    .catch(() => console.log('Database connection failed!'))
mongoose.set('useFindAndModify', false);

/*  app.get('/api/products/:id', (req,res)=>{
  const product = data.products.find((x)=> x._id === req.params.id);
  if(product){
      res.send(product);
  } else {
      res.status(404).send({message:' Sorry .. product not Found now '});
  }
}); */




app.get('/', (req,res)=>{
    res.send(`server is running well`)
}); 

app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message});
});


app.listen(PORT, () => {
    console.log(`Server is running...${PORT} Data base name ${DB_NAME}` )
});
