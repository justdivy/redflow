import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected to Mongodb Database ${conn.connection.host}`.white.yellow
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};

export default connectDB;
