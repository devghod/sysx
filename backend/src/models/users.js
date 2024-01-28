const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  first_name: {
      type: String
  },
  middle_name: {
      type: String
  },
  last_name: {
      type: String
  },
  email: {
      type: String,
  },
  password: {
    type: String,
  },
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
  tokens: [{
    token: {
        type: String
    }
  }],
  unique_token: {
      type: String
  },
  created_by: {
      type: String,
  },
  deleted: {
    type: Boolean,
    default: false
  }
})

// usersSchema.pre('save', async function (next) {
//   const user = this
//   if (user.isModified('password')) {
//       user.password = await bcrypt.hash(user.password, 8)
//   }
//   next()
// })

const Users = mongoose.model('Users', usersSchema)
module.exports = Users