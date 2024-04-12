const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://test:promag123@cluster0.klbpcel.mongodb.net/`;

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
