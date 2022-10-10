const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  luganda: {
    type: String,
    required: true
  },
  english: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Word', wordSchema)