const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://promag:${process.env.MONGODB_PASSWORD}@cluster0.tiibnnq.mongodb.net/`;

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
