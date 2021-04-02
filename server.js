const app = require('./app');

//console.log(process.env);

const port = process.env.PORT || 3000;

// this ()=> is the call back funcion that will
// be call as soon as the server starts listening.
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
