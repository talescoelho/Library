const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getByUsersId,
  createNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getByUsersId);
router.post('/', createNewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;