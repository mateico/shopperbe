const Product = require('./../models/productModel');

// param middleware has the val parameter
// the return will make the next() method not reachable.

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    /* result: products.length,
    data: {
      products,
    }, */
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

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: 'Invalid data sent!' });
  }
};

exports.deleteProduct = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
