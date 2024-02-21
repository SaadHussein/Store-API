const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    console.log('Try To Connect...');
    await mongoose.connect(url);
    console.log('Connected To DB.');
  } catch (err) {
    return {
      message: "Error Happened.",
      error: err
    };
  }
};

module.exports = connectDB;
