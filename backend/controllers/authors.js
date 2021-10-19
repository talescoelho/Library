const service = require('../services/authors');

const getAllAuthors = async (_req, res) => {
  const authors = await service.getAllAuthors();
  res.status(200).json({ authors });
};

module.exports = { getAllAuthors };
