import { config } from "dotenv";
config();

import { connect } from "mongoose";
const mongoURI = `mongodb+srv://promag:${process.env.MONGODB_PASSWORD}@cluster0.tiibnnq.mongodb.net/`;

const connectToMongo = () => {
  connect(mongoURI);
};

export default connectToMongo;

// mongo cloud URI: 'mongodb+srv://promag:<password>@cluster0.tiibnnq.mongodb.net/'
// const mongoURI = 'mongodb://localhost:27017/ProjectManagementTool?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
