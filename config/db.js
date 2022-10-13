require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      (uri =
        "mongodb+srv://trans23nn:sHZfA0s8OOl0JUbs@cluster0.hty68.mongodb.net/trans23?retryWrites=true&w=majority")
    );

    console.log("database connected");
  } catch {
    console.log(error.message);
  }
};

module.exports = connectDB;
