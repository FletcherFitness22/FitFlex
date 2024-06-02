const fs = require('fs');
const path = require('path');
// const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/user'); // Assuming you have a User model defined

// Construct the absolute path to userData.json
const userDataPath = path.join(__dirname, 'userData.json');

// Read data from userData.json
const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf8'));

// Function to seed the database
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await db.connect('mongodb://localhost:27017/FitFlex', { useNewUrlParser: true, useUnifiedTopology: true });

    // Insert users into the database
    await User.insertMany(userData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    db.connection.close();
  }
}

module.exports = seedDatabase;
