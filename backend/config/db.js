const mongoose = require("mongoose");

// const MONGO_URL =process.env.MONGO_URL;
const MONGO_URL ='mongodb://127.0.0.1:27017/ChatApp123';


 async function data() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("CONNECTION OPEN to mongoose");
  } catch (err) {
    console.log("Error occurred", err);
  }
}
module.exports = data;
