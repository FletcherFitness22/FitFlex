const mongoose = require('mongoose');
// const seedDatabase = require('../seeds/seedDatabase');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/FitFlex', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
    // Call the seedDatabase function after connection is established
    // seedDatabase()
    //   .then(() => {
    //     console.log('Database seeded successfully');
    //   })
    //   .catch(seedError => {
    //     console.error('Error seeding database:', seedError);
    //     process.exit(1); // Exit the process if seeding fails
    //   });
  })
  .catch(connectError => {
    console.error('Unable to connect to MongoDB:', connectError);
    process.exit(1); // Exit the process if connection fails
  });

module.exports = mongoose.connection;

