const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://promag:${process.env.MONGODB_PASSWORD}@cluster0.tiibnnq.mongodb.net/`;

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;

// mongo cloud URI: 'mongodb+srv://promag:<password>@cluster0.tiibnnq.mongodb.net/'
// const mongoURI = 'mongodb://localhost:27017/ProjectManagementTool?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
