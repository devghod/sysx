const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const UsersModel = require('../models/users')

// GET method route
router.get('/get-users', async (req, res) => {
  try {

    const users = await UsersModel
      .find({ deleted: false })
      .select({ 
        first_name: 1, 
        middle_name: 1, 
        last_name: 1, 
        email: 1,
        username: 1,
        date_created: 1,
        image: 1
      });

    res
      .status(200)
      .json({ 
        users: users, 
        total: users.length,
        success: true, 
        message: 'GET request for users' 
      });

  } catch (error) {
    res.status(400).json({ success: false, message: `Error ${error}` });
  }
})

// GET method route
router.get('/get-user/:id', async (req, res) => {
  try {

    const id = req.params.id;

    const user = await UsersModel
      .findOne({ _id: id })
      .select({ 
        first_name: 1, 
        middle_name: 1, 
        last_name: 1, 
        email: 1,
        username: 1,
        date_created: 1,
        image: 1
      });

    res
      .status(200)
      .json({ 
        user: user, 
        success: true, 
        message: 'GET request for user' 
      });

  } catch (error) {
    res.status(400).json({ success: false, message: `Error ${error}` });
  }
})

// POST method route
router.post('/add-user', async (req, res) => {
  try {
    const body = req.body;
    const createUser = new UsersModel({ ...body });
    const result = await createUser.save();
    
    res.status(201).json({ data: result, message: 'POST request for user' });
  } catch (error) {
    res.status(400).json({ success: false, message: `Error ${error}` });
  }
})

// PUT method route
router.put('/:id', async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;

    const updateUser = await UsersModel
      .findOneAndUpdate(
        { _id: id }, 
        { ...body }, 
        { new: true, useFindAndModify: false }
      );

    if (updateUser === null) return res.status(200).json({ success: false, message: 'No user exist' });
    
    res.status(200).json({ data: updateUser, success: true, message: 'PUT request for user' });
  } catch (error) {
    res.status(400).json({ success: false, message: `Error ${error}` });
  }
})

// DELETE method route
// Rather delete the data, add deleted key and set it as boolean
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const updateUser = await UsersModel
      .findOneAndUpdate(
        { _id: id }, 
        { deleted: true }, 
        { new: true, useFindAndModify: false }
      );

    if (updateUser === null) return res.status(200).json({ success: false, message: 'No user exist' });
    
    res.status(200).json({ data: updateUser, success: true, message: 'DELETE request for user' });
  } catch (error) {
    res.status(400).json({ success: false, message: `Error ${error}` });
  }
})

module.exports = router