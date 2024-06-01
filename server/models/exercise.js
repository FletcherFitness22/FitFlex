const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  equipment: {
    type: String,
    required: false,
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;

