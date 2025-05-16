const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("❌ Error connecting to MongoDB:", err);
  }
};

module.exports = connectToDb;

