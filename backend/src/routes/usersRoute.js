const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth');
const { 
  getUsers, 
  getUserById, 
  addUser, 
  updateUser, 
  deleteUser 
} = require('../controllers/users');

router.get('/get-users', authenticate, getUsers);
router.get('/get-user/:id', authenticate, getUserById);
router.post('/add-user', authenticate, addUser);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);

module.exports = router;