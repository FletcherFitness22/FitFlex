const { Exercise } = require('../models');

module.exports = {
  // Get a single exercise by either its id or its name
  async getSingleExercise({ params }, res) {
    const foundExercise = await Exercise.findOne({
      $or: [{ _id: params.id }, { name: params.name }],
    });

    if (!foundExercise) {
      return res.status(400).json({ message: 'Cannot find an exercise with this id or name!' });
    }

    res.json(foundExercise);
  },
};
