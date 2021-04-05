const express = require('express');
const morgan = require('morgan');

// everything related to express goes here

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// here we are mounting routers
// now productRouter and userRouter and middlewares
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
