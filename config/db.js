import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.error(
      `MongoDB Connection Error: ${error.message}`.bgRed.white
    );

   
    process.exit(1);
  }
};

export default connectDB;
