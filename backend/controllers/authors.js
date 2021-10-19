const Authors = require('../models/authors');

const getAllAuthors = async (_req, res) => {
  Authors.find()
    .then((authors) => res.json(authors))
    .catch((err) => console.log(err));
};

const getByAuthorId = async (req, res) => {
  const { id } = req.params;
  Authors.findOne(
    { _id: id },
    { _id: true, name: true, lastName: true },
    (err, author) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(author);
    }
  );
};

const createNewAuthor = (req, res) => {
  const { name, lastName } = req.body;

  const newAuthors = new Authors({
    name,
    lastName,
  });

  newAuthors
    .save()
    .then(() => res.status(200).json(newAuthors))
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating account',
      })
    );
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  try {
    await Authors.findByIdAndUpdate(
      id,
      { name, lastName },
      { new: true },
      (err, author) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(author);
      }
    );
  } catch (err) {
    return err;
  }
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  await Authors.findByIdAndRemove(id, (err, author) => {
    if (err) return res.status(500).send(err);

    const response = {
      message: 'Todo successfully deleted',
      author,
    };
    return res.status(200).send(response);
  });
};

module.exports = {
  getAllAuthors,
  getByAuthorId,
  createNewAuthor,
  updateAuthor,
  deleteAuthor,
};
