const mongoose = require('mongoose')

const personschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 4,
    maxlenght: 10,
    unique: true,
  },
})

module.exports = mongoose.model('person', personschema)
