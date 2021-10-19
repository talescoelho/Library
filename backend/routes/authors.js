const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

const Authors = require('../models/authors');

router.get('/', (req, res) => {
  console.log(Authors);
  Authors.find()
    .then((authors) => res.json(authors))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Authors.findOne(
    { _id: id },
    { _id: true, name: true, lastName: true },
    (err, author) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(author);
    }
  );
});

router.post('/', (req, res) => {
  const { name, lastName } = req.body;

  const newAuthors = new Authors({
    name,
    lastName,
  });

  newAuthors
    .save()
    .then(() => res.json(newAuthors))
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating account',
      })
    );
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  try {
    await Authors.findByIdAndUpdate(
      id,
      { name, lastName },
      { new: true },
      (err, author) => {
        // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.status(200).json(author);
      }
    );
  } catch (err) {
    return err;
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Authors.findByIdAndRemove(id, (err, author) => {
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.

    // organizar a agenda
    // criar um notion para anotar ideias
    // participar da cumbuca

    const response = {
      message: 'Todo successfully deleted',
      author,
    };
    return res.status(200).send(response);
  });
});

module.exports = router;
