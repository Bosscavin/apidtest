const User = require('../model/user.model');

const getAllUsers = async (req, res) => {
  const [users] = await User.getAllUser();
  console.log(users);
  res.json(users);
};

const addNewUser = async (req, res) => {
  console.log(req.body);
  const {
    firstname,
    lastname,
    address,
    postcode,
    phonenumber,
    username,
    password,
  } = req.body;

  const user = await new User(
    firstname,
    lastname,
    address,
    postcode,
    phonenumber,
    username,
    password
  );

  await user.createUser();
  res.status(201).json(user);
};

const editUser = async (req, res) => {
  const {
    firstname,
    lastname,
    address,
    postcode,
    phonenumber,
    username,
    password,
  } = req.body;

  const user = await new User(
    firstname,
    lastname,
    address,
    postcode,
    phonenumber,
    username,
    password,
    req.params.id
  );
  user.editUser();
  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  await User.deleteUser(req.params.id);
  res.status(200).json({ message: `user with id: ${req.params.id} deleted` });
};

const deleteAllUser = async (req, res) => {
  await User.deleteAll();
  res.status(200).json({ message: 'All users deleted' });
};

module.exports = {
  getAllUsers,
  addNewUser,
  editUser,
  deleteUser,
  deleteAllUser,
};
