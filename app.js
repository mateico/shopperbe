const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'success',
    data: {
      id: req.params,
    },
  });
};

const updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour here...',
    },
  });
};

const createTour = (req, res) => {
  console.log(req.body);
  res.send('Done');
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is no yet defined',
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is no yet defined',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is no yet defined',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is no yet defined',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is no yet defined',
  });
};

const productRouter = express.Router();
const userRouter = express.Router();

productRouter.route('/').get(getAllTours).post(createTour);

productRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createUser);

userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

// here we are mounting routers
app.use('/api/v1/tours', productRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;

// this ()=> is the call back funcion that will
// be call as soon as the server starts listening.
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
