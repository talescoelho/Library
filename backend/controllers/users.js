const Users = require('../models/users');

const getAllUsers = async (req, res) => {
  Users.find()
  .then((user) => res.json(user))
  .catch((err) => console.log(err));
};

const getByUsersId = async (req, res) => {};

module.exports = {
  getAllUsers,
  getByUsersId,
};