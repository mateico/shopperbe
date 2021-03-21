const fs = require('fs');

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// param middleware has the val parameter
// the return will make the next() method not reachable.
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (req.params.id * 1 > products.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  //console.log(`Tour id is: ${val}`);
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: products.length,
    data: {
      products,
    },
  });
};

exports.getProduct = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'success',
    data: {
      id: req.params,
    },
  });
};

exports.updateProduct = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour here...',
    },
  });
};

exports.createProduct = (req, res) => {
  console.log(req.body);
  res.send('Done');
};

exports.deleteProduct = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
