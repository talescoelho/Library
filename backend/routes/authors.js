const express = require('express');
const router = express.Router();

const controller = require('../controllers/authors');

router.get('/', controller.getAllAuthors);

router.get('/:id', controller.getByAuthorId);

router.post('/', controller.createNewAuthor);

router.put('/:id', controller.updateAuthor);

router.delete('/:id', controller.deleteAuthor);

module.exports = router;
