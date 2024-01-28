const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const UsersModel = require('../models/users')

// GET method route
router.get('/', async (req, res) => {
  try {
    const users = await UsersModel.find({ deleted: false });

    res.status(200).json({ data: users, success: true, message: 'GET request for user' });
  } catch (error) {
    res.status(400).json({ success: false, message: `Error ${error}` });
  }
})

// POST method route
router.post('/', async (req, res) => {
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