import Mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

Mongoose.Promise = global.Promise;

Mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connectToDb = async () => {
  const db = Mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

export default connectToDb;
