const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: [true, 'A product must have a unique name'],

    maxLength: [40, 'A product must have less or equal than 40 characters'],
    minLength: [5, 'A product must have more or equal than 5 characters'],
  },
  price: {
    type: Number,
    required: [true, 'A product must have a prices'],
    min: [1, 'Price must be above 0'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
