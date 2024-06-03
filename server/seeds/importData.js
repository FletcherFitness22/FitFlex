const fs = require('fs');
const mongoose = require('mongoose');
const User = require('../models'); // Assuming you have a User model defined

// Read data from userData.json
const userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));

// // Function to import data into the database
async function importData() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/FitFlex', { useNewUrlParser: true, useUnifiedTopology: true });

//     // Insert users into the database
    await User.insertMany(userData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Call the importData function
importData();
