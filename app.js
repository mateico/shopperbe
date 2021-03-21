const express = require('express');

const app = express();

// defining a rout
// responds to the get http method and the url is /
// what we need to be done when called get is specidied in the call back funciorn () => as second argument.
// route defined for the http method get and the url /
app.get('/', (req, res) => {
  res.status(200).json({ message: 'These are the products', app: 'Shopper' });
});

// route defined for the http method post and the url /
app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});
const port = 3000;

// this ()=> is the call back funcion that will
// be call as soon as the server starts listening.
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
