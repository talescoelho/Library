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

const createNewUser = (req, res) => {
  const { 
    name,
    lastName,
    cpf,
    birth,
    sex,
    register,
    lastChange,
    addresses : {
      postalCode,
      city,
      country,
      district,
      street,
      number,
    },
    contact: {
      email,
      phoneNumber,
    },
    permission: {
      cargo,
      level,
    }

  } = req.body;

  const newUser = new Users({
    name,
    lastName,
    cpf,
    birth,
    sex,
    register,
    lastChange,
    addresses : {
      postalCode,
      city,
      country,
      district,
      street,
      number,
    },
    contact: {
      email,
      phoneNumber,
    },
    permission: {
      cargo,
      level,
    }
  });

  newUser
    .save()
    .then(() => res.status(200).json(newUser))
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating account',
      })
    );
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastName,
    cpf,
    birth,
    sex,
    register,
    lastChange,
    addresses : {
      postalCode,
      city,
      country,
      district,
      street,
      number,
    },
    contact: {
      email,
      phoneNumber,
    },
    permission: {
      cargo,
      level,
    }
  } = req.body;

  const userUpdate = {
    name,
    lastName,
    cpf,
    birth,
    sex,
    register,
    lastChange,
    addresses : {
      postalCode,
      city,
      country,
      district,
      street,
      number,
    },
    contact: {
      email,
      phoneNumber,
    },
    permission: {
      cargo,
      level,
    }
  }
  try {
    await Users.findByIdAndUpdate(
      id,
      userUpdate,
      { new: true },
      (err, user) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(user);
      }
    );
  } catch (err) {
    return err;
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await Users.findByIdAndRemove(id, (err, users) => {
    if (err) return res.status(500).send(err);

    const response = {
      message: 'Todo successfully deleted',
      users,
    };
    return res.status(200).send(response);
  });
};

module.exports = {
  getAllUsers,
  getByUsersId,
  createNewUser,
  updateUser,
  deleteUser,
};