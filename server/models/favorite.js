const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Assuming you have a User model
  },
  exerciseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Exercise' // Assuming you have an Exercise model
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
