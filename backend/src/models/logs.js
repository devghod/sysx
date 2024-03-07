const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const logsSchema = new mongoose.Schema({
  created_for: {
   type: String,
  },
  description: {
    type: String
  },

  // necessary fields
  date_created: {
    type: Date,
    required: true,
    default: Date.now
  },
  date_updated: {
    type: Date,
    required: true,
    default: Date.now
  },
  created_by: {
    type: String,
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

const Logs = mongoose.model('Logs', logsSchema);
module.exports = Logs;