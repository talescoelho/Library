const Users = require('../models/users');

const getAllUsers = async (req, res) => {
  Users.find()
  .then((user) => res.json(user))
  .catch((err) => console.log(err));
};

const getByUsersId = async (req, res) => {
  const { id } = req.params;
  Users.findOne(
    { _id: id },
    { _id: true, name: true, lastName: true },
    (err, users) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(users);
    }
  );
};

module.exports = {
  getAllUsers,
  getByUsersId,
};