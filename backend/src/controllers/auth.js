const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UsersModel = require('../models/users');

// Register a new user
const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UsersModel({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await UsersModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

// Verify token
const verify = async (req, res, next) => {
  const { token } = req.body;

  try {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        // Token verification failed
        res.json({ error: true, message: `Token verification failed: ${err.message}` });
      } else {
        // Token is valid, and the payload is available in the 'decoded' object
        res.json({ success: true, decoded: decoded, message: `Decoded Token` });
      }
    });
    
    // res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, verify };