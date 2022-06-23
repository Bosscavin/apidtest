const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  addNewUser,
  editUser,
  deleteUser,
  deleteAllUser,
} = require('../controller/user.controller');

router.get('/', getAllUsers);
router.post('/', addNewUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
router.delete('/', deleteAllUser);

module.exports = router;
