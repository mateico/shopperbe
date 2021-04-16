const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!!');
  });

/* const productTest = new Product({
  name: 'Programming in C 2',
  price: 99,
});

productTest
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log('ERROR: ', err);
  }); */

const port = process.env.PORT || 3000;

// this ()=> is the call back funcion that will
// be call as soon as the server starts listening.
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//test
