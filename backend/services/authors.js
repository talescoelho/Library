const model = require('../models/authors');

const getAllAuthors = async () => {
  const products = await model.getAllProducts();
  return products;
};

module.exports = { getAllAuthors };
