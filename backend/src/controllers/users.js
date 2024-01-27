const express = require('express')
const router = express.Router()
const UsersModel = require('../modals/users')

// GET method route
router.get('/', async (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
router.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

// PUT method route
router.put('/', (req, res) => {
  res.send('PUT request to the homepage')
})

// DELETE method route
router.delete('/', (req, res) => {
  res.send('DELETE request to the homepage')
})

module.exports = router