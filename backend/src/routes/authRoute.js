const express = require('express');
const router = express.Router();
const { register, login, verify } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/verify', verify);

module.exports = router;